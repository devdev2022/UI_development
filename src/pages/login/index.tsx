import { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import cx from "classnames";
import Header from "components/mainHeader";

//이미지
import { ReactComponent as IconAccount } from "../../assets/icon_account.svg";
import { ReactComponent as IconLock } from "../../assets/icon_lock.svg";
import { ReactComponent as IconClear } from "../../assets/icon_clear.svg";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const checkText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "id") {
      setId(value);
    }

    if (name === "password") {
      setPassword(e.target.value);
    }
  };

  const resetText = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "id") {
      setId("");
    }

    if (name === "password") {
      setPassword("");
    }
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="login-layout">
          <h1>로그인</h1>
          <form className="form_style">
            <div className="input_area">
              <div className="input-box">
                <label htmlFor="id" className="label">
                  아이디
                </label>
                <div className="input-area">
                  <span className="icon">
                    <IconAccount />
                  </span>
                  <input
                    name="id"
                    type="text"
                    className="input"
                    placeholder="아이디를 입력하세요"
                    value={id}
                    onChange={checkText}
                  />
                  <button
                    name="id"
                    type="button"
                    className={"btn_clear"}
                    onClick={resetText}
                  >
                    <IconClear />
                  </button>
                </div>
              </div>
              <div className="input-box">
                <label htmlFor="pw" className="label">
                  비밀번호
                </label>
                <div className="input-area">
                  <span className="icon">
                    <IconLock />
                  </span>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={checkText}
                  />
                  <button
                    name="password"
                    type="button"
                    className={"btn_clear"}
                    onClick={resetText}
                  >
                    <IconClear />
                  </button>
                </div>
              </div>
            </div>
            <button type="submit" className="btn_login_style" disabled={false}>
              LOGIN
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
