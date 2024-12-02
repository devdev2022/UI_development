import { useCallback, useEffect, useRef } from "react";

interface OutsideClickProps {
  onClickOutside: () => void;
}

const useOutsideClick = (props: OutsideClickProps) => {
  const { onClickOutside } = props;
  const ref = useRef(document.createElement("div"));

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const inside = ref.current?.contains(e.target as Node);
      if (inside) return;
      onClickOutside();
    },
    [onClickOutside, ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;
