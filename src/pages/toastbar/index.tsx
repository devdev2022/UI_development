import { useState } from "react";
import Header from "components/mainHeader";
import SnackBar from "components/snackBar";

export default function Modal() {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  const onClickSnackBar = () => {
    setIsSnackBarOpen(true);
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <button
          type="button"
          onClick={onClickSnackBar}
          style={{ padding: "20px", fontSize: "20px" }}
        >
          스낵바 표시
        </button>
      </main>
      <SnackBar
        content="요청에 성공하였습니다."
        isShow={isSnackBarOpen}
        isShowState={() => setIsSnackBarOpen(false)}
      />
    </>
  );
}
