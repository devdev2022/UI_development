import { Link } from "react-router-dom";
import cx from "classnames";

interface ButtonProps {
  href?: boolean;
  className?:
    | "type_border"
    | "type_gray"
    | "type_fixed"
    | "type_red"
    | "type_light_violet"
    | "type_gray_300"
    | string;
  text: string;
  useCamera?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  className,
  href,
  isDisabled,
  useCamera,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button
        className={cx(className, "btn")}
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </>
  );
}
