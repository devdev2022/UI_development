import { useState } from "react";
import Header from "components/mainHeader";
import Tooltip from "../../components/tooltip";

function makingDiv() {
  const divCount = 3;
  const result = [];

  for (let i = 1; i <= divCount; i++) {
    result.push(
      <div
        key={i}
        className="tooltip_inner_content"
        style={{
          borderBottom: "1px solid black",
          ...(i === 1 && { borderTop: "1px solid black" }),
        }}
      >
        <div>예시 {i}</div>
        <Tooltip index={`${i}`} text="테스트" />
      </div>
    );
  }

  return result;
}

export default function SmartKeyBottomSheet() {
  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="tooltip_list_container">{makingDiv()}</section>
      </main>
    </>
  );
}
