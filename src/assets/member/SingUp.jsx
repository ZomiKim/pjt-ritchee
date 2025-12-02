import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

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
    if (formData.userpwd != formData.userpwd1) {
      return "비밀번호가 일치하지 않습니다.";
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

    const { error } = await signUp(
      formData.name,
      formData.birth,
      formData.useremail,
      formData.userpwd,
      formData.gender,
      formData.phone,
      formData.text
    );
    console.log(error);

    if (!error) {
      navigate("/member/signin");
    } else {
      setLoading(error);
    }

    setLoading(false);
  };
  return <div>SignUp</div>;
}

export default SignUp;
