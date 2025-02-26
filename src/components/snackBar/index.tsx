import { useState, useEffect } from "react";
import cx from "classnames";

interface ToastBarProps {
  isShow: boolean;
  content: string;
  isShowState: () => void;
}

export default function SnackBar({
  isShow,
  content,
  isShowState,
}: ToastBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isShow) {
      setIsOpen(true);

      const timer = setTimeout(() => {
        if (isShowState) {
          isShowState();
        }
        setIsOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (!isShow) {
      setIsOpen(false);
    }
  }, [isShow]);

  return (
    <div className="snackbar_box">
      <p className={cx("snackbar", { is_show: isOpen })}>{content}</p>
    </div>
  );
}
