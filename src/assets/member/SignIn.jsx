import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const { loading, setLoading, signIn } = useUser();

  const [formData, setFormData] = useState({
    useremail: "",
    userpwd: "",
  });

  const [errorM, setErrorM] = useState("");

  const navigate = useNavigate();

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validation = () => {
    if (formData.userpwd.length < 8) {
      return "비밀번호 8자리 이상 입력해주세요.";
    }
    return "";
  };

  const confirmHandler = async (e) => {
    e.preventDefault();

    const message = validation();
    if (message) {
      setErrorM(message);
      return;
    }
    setErrorM("");
    setLoading(true);

    const { error } = await signIn(formData.useremail, formData.userpwd);

    if (!error) navigate("/");
    else setErrorM(error);

    setLoading(false);
  };

  return (
    <div>
      {errorM && <div style={{ color: "red" }}>{errorM}</div>}
      <div>
        <form onSubmit={confirmHandler}>
          <div>
            <label htmlFor="email" className="sr-only">
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="아이디를 입력하세요."
              name="useremail"
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="pwd" className="sr-only">
              비밀번호
            </label>
            <input
              type="password"
              id="pwd"
              placeholder="비밀번호를 입력하세요."
              name="userpwd"
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <div>
              <button type="submit" disabled={loading}>
                {loading ? "로딩중..." : " 로그인"}
              </button>
            </div>
          </div>
          <hr />
          <div>
            <button type="button">아이디 / 비밀번호 찾기</button>
            <Link to="/member/signUp" className="button-link">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
