import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const { loading, setLoading, signUp } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    useremail: "",
    userpwd: "",
    userpwd1: "",
    gender: "",
    phone: "",
    text: "",
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
    if (formData.userpwd.length < 8 || formData.userpwd1.length < 8) {
      return "비밀번호는 8자리 이상이어야 합니다.";
    }
    if (formData.userpwd !== formData.userpwd1) {
      return "비밀번호가 일치하지 않습니다.";
    }
    if (!/^\d{8}$/.test(formData.birth)) {
      return "생년월일은 8자리 이상 입력해야 합니다.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.useremail)) {
      return "올바른 이메일 형식을 입력하세요.";
    }
    if (!formData.gender) {
      return "성별을 선택해주세요.";
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
    try {
      setLoading(true);
      const { error } = await signUp(
        formData.name,
        formData.birth,
        formData.useremail,
        formData.userpwd,
        formData.gender,
        formData.phone,
        formData.text
      );
      if (!error) navigate("/member/signin");
      else setErrorM(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="text-red-500">{errorM}</div>
      <div>
        <form onSubmit={confirmHandler}>
          <div>
            <label htmlFor="name" className="sr-only">
              이름
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름"
              name="name"
              value={formData.name}
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="birth" className="sr-only">
              생년월일
            </label>
            <input
              type="text"
              id="birth"
              placeholder="생년월일"
              name="birth"
              value={formData.birth}
              onChange={eventHandler}
              required
              disabled={loading}
              pattern="\d{8}"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="이메일"
              name="useremail"
              value={formData.useremail}
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
              placeholder="비밀번호"
              name="userpwd"
              value={formData.userpwd}
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="pwd1" className="sr-only">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="pwd1"
              placeholder="비밀번호 확인"
              name="userpwd1"
              value={formData.userpwd1}
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="gender" className="sr-only">
              성별
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="남자"
                  checked={formData.gender === "남자"}
                  onChange={eventHandler}
                  required
                  disabled={loading}
                />
                남자
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="여자"
                  checked={formData.gender === "여자"}
                  onChange={eventHandler}
                  required
                  disabled={loading}
                />
                여자
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              핸드폰 번호
            </label>
            <input
              type="text"
              id="phone"
              placeholder="핸드폰 번호"
              name="phone"
              value={formData.phone}
              onChange={eventHandler}
              required
              disabled={loading}
              pattern="\d{10,11}"
            />
          </div>
          <div>
            <label htmlFor="text" className="sr-only">
              특이사항
            </label>
            <input
              type="text"
              id="text"
              placeholder="특이사항"
              name="text"
              value={formData.text}
              onChange={eventHandler}
              required
              disabled={loading}
            />
          </div>
          <div>
            <div>
              <button type="submit" disabled={loading}>
                회원가입
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
