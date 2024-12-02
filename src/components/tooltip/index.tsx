import { ReactComponent as IconQuestion } from "../../assets/icon_question.svg";
import { useState, ReactNode } from "react";
import cx from "classnames";
import useOutsideClick from "../../hooks/useOutsideClick";

interface TooltipProps {
  index: string;
  text?: string;
  children?: ReactNode;
  axis?: "left" | "right";
  position?: "relative" | "absolute";
}

export default function Tooltip({
  index,
  text,
  children,
  axis = "right",
  position = "absolute",
}: TooltipProps) {
  const [isShow, setIsShow] = useState(false);
  const ref = useOutsideClick({
    onClickOutside() {
      setIsShow(false);
    },
  });

  if (index === "1") {
    return (
      <div className="tooltip_wrap" ref={ref}>
        <button
          type="button"
          className="btn_tooltip"
          onClick={() => setIsShow(!isShow)}
        >
          <IconQuestion />
        </button>
        <div className={cx("box_tooltip", { is_show: isShow }, axis, position)}>
          {text}
          {children}
        </div>
      </div>
    );
  } else return null;
}
