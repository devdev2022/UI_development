import { useState } from "react";
import BottomSheet from "components/bottomSheet";
import Header from "components/mainHeader";
//Image
import { ReactComponent as SampleImage } from "assets/SampleImage.svg";
//MockData
import Essay from "../../mockData/essay.json";

export default function Modal() {
  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="overscroll-content">
          <div>
            <div className="overscroll-content_title">스크롤 버전1</div>
            <div className="overscroll_box_layout_1">{Essay.text}</div>
          </div>
          <div>
            <div className="overscroll-content_title">스크롤 버전2</div>
            <div className="overscroll_box_layout_2">{Essay.text}</div>
          </div>
          <div>
            <div className="overscroll-content_title">스크롤 버전3</div>
            <div className="overscroll_box_layout_3">{Essay.text}</div>
          </div>
          <div>
            <div className="overscroll-content_title">스크롤 버전4</div>
            <div className="overscroll_box_layout_4">{Essay.text}</div>
          </div>
        </section>
      </main>
    </>
  );
}
