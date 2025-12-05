import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../componetns/Button";

function SignUp() {
  const { loading, setLoading, signUp } = useUser();
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    useremail: "",
    userpswd: "",
    userpswd1: "",
    gender: "",
    phone: "",
    text: "",
    addr: "",
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

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
    setFormData((prev) => ({ ...prev, gender: selectedGender }));
  };

  const validation = () => {
    if (formData.userpswd.length < 8 || formData.userpswd1.length < 8) {
      return "비밀번호는 8자리 이상이어야 합니다.";
    }
    if (formData.userpswd !== formData.userpswd1) {
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
    // console.log("폼 제출됨");

    const message = validation();
    if (message) {
      setErrorM(message);
      return;
    }

    setErrorM("");
    try {
      setLoading(true);

      const { data, error } = await signUp({
        email: formData.useremail,
        password: formData.userpswd,
        options: {
          data: {
            name: formData.name,
            birth: formData.birth,
            gender: formData.gender,
            phone: formData.phone,
            text: formData.text,
            addr: formData.addr,
          },
        },
      });
      if (error) {
        setErrorM(error.message || "회원가입 중 오류가 발생했습니다.");
      } else {
        alert(`${formData.name}님, 회원가입을 환영합니다!`);
        navigate("/");
      }
    } catch (err) {
      setErrorM(err.message || "회원가입 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-main-01 myBg flex flex-col items-center justify-center h-screen">
      <div>
        <img
          src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/logo_wh.png"
          alt="logo"
          className="w-32 mb-6"
        />
      </div>
      {/* PC 버전 */}

      <form
        onSubmit={confirmHandler}
        className="flex flex-col items-center w-[90%] max-w-[480px] pb-30"
      >
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
          onInvalid={(e) => e.target.setCustomValidity("이름을 입력하세요.")}
          onInput={(e) => e.target.setCustomValidity("")}
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
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
          onInvalid={(e) =>
            e.target.setCustomValidity("생년월일 8자리를 입력하세요.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          pattern="\d{8}"
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
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
          onInvalid={(e) => e.target.setCustomValidity("이메일을 입력하세요.")}
          onInput={(e) => e.target.setCustomValidity("")}
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
        <label htmlFor="pswd" className="sr-only">
          비밀번호
        </label>
        <input
          type="password"
          id="pswd"
          placeholder="비밀번호"
          name="userpswd"
          value={formData.userpswd}
          onChange={eventHandler}
          required
          disabled={loading}
          onInvalid={(e) =>
            e.target.setCustomValidity("비밀번호를 입력하세요.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
        <label htmlFor="pswd1" className="sr-only">
          비밀번호 확인
        </label>
        <input
          type="password"
          id="pswd1"
          placeholder="비밀번호 확인"
          name="userpswd1"
          value={formData.userpwd1}
          onChange={eventHandler}
          required
          disabled={loading}
          onInvalid={(e) =>
            e.target.setCustomValidity("비밀번호를 다시 한번 입력하세요.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
        <label htmlFor="gender" className="sr-only">
          성별
        </label>

        <div className="flex flex-row w-full my-2">
          {/* 남 */}
          <div
            className="mr-5 flex items-center cursor-pointer"
            onClick={() => handleGenderClick("남")}
          >
            <span
              className="material-icons mr-2"
              style={{ color: gender === "남" ? "white" : "white" }}
            >
              {gender === "남"
                ? "radio_button_checked"
                : "radio_button_unchecked"}
            </span>
            <label className="text-white">남</label>
          </div>

          {/* 여 */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleGenderClick("여")}
          >
            <span
              className="material-icons mr-2"
              style={{ color: gender === "여" ? "white" : "white" }}
            >
              {gender === "여"
                ? "radio_button_checked"
                : "radio_button_unchecked"}
            </span>
            <label className="text-white">여</label>
          </div>
        </div>

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
          onInvalid={(e) =>
            e.target.setCustomValidity("핸드폰 번호를 입력하세요.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          pattern="\d{10,11}"
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
        <label htmlFor="addr" className="sr-only">
          주소
        </label>
        <input
          type="text"
          id="addr"
          placeholder="주소"
          name="addr"
          value={formData.addr}
          onChange={eventHandler}
          required
          disabled={loading}
          onInvalid={(e) => e.target.setCustomValidity("주소를 입력하세요.")}
          onInput={(e) => e.target.setCustomValidity("")}
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02"
        />
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
          className="outline-none placeholder-gray-mid rounded text-[13px] bg-white w-full max-w-[480px] py-2 px-3 mb-2 border border-main-01 focus:border-main-02 h-32"
        />
        <div className="text-red-500">{errorM}</div>
        <Button
          type="submit"
          className="py-2 text-[13px] w-full max-w-[480px]"
          disabled={loading}
        >
          회원가입
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
