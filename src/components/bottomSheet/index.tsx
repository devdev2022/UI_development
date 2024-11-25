import Button from "components/button/button";
import cx from "classnames";

interface BottomSheetProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode | null;
  btnText: string;
  onClose?: () => void;
}

export default function BottomSheet({
  isOpen,
  title,
  children,
  btnText,
  onClose,
}: BottomSheetProps) {
  return (
    <div
      className={cx("bottom_sheet_wrap", { is_open: isOpen })}
      onClick={onClose}
    >
      <div className="bottom_sheet_inner">
        {title && <strong className="title">{title}</strong>}
        <div className="bottom_sheet_content">{children}</div>
        <Button text={btnText} onClick={onClose} />
      </div>
    </div>
  );
}
