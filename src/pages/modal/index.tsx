import { useState } from "react";
import BottomSheet from "components/bottomSheet";
import Header from "components/mainHeader";
//Image
import { ReactComponent as SampleImage } from "assets/SampleImage.svg";

export default function SmartKeyBottomSheet() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <button
          type="button"
          onClick={() => setIsOpenModal(true)}
          style={{ padding: "20px", fontSize: "20px" }}
        >
          모달 창 표시
        </button>
      </main>
      <BottomSheet
        isOpen={isOpenModal}
        onClose={closeModal}
        title="모달창 타이틀"
        btnText="확인"
      >
        <div className="modal_box">
          <SampleImage />
          <strong className="modal_main_title">모달창 메인</strong>
          <p className="modal_content">모달창 내용</p>
        </div>
      </BottomSheet>
    </>
  );
}
