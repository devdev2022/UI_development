import { useState, useRef, useEffect } from "react";

interface TimerState {
  seconds: number;
  minutes: number;
  isExpired: boolean;
}

interface TimerReturn extends TimerState {
  resetTimer: () => void;
}

interface useCountUpTimerProps {
  maxMinutes: number;
  isDeferred?: boolean;
}

interface useCountUpTimerType {
  (props: useCountUpTimerProps): TimerReturn;
}

const useCountUpTimer: useCountUpTimerType = ({
  maxMinutes,
  isDeferred = false,
}: useCountUpTimerProps) => {
  const [timer, setTimer] = useState<TimerState>({
    seconds: 0,
    minutes: maxMinutes,
    isExpired: false,
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const timeUp = timer.seconds === 0 && timer.minutes === 0;

  const updateTime = (): void => {
    setTimer((prevState) => {
      const { seconds, minutes } = prevState;
      if (seconds === 0 && minutes === 0) {
        return {
          ...prevState,
        };
      }
      if (seconds === 0) {
        return {
          ...prevState,
          minutes: minutes - 1,
          seconds: 59,
        };
      } else {
        return {
          ...prevState,
          minutes,
          seconds: seconds - 1,
        };
      }
    });
  };

  const reset = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer({
      minutes: maxMinutes,
      seconds: 0,
      isExpired: false,
    });
    intervalRef.current = setInterval(updateTime, 1000);
  };

  const runTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(updateTime, 1000);
  };

  useEffect(() => {
    if (!isDeferred) {
      runTimer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    };
  }, []);

  useEffect(() => {
    if (timeUp) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [timeUp]);

  return {
    ...timer,
    isExpired: timeUp,
    resetTimer: reset,
  };
};

export default useCountUpTimer;
