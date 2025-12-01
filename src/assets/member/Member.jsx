import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SingUp from "./SingUP";

function Member() {
  return (
    <>
      <div>Member</div>

      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SingUp />} />
      </Routes>
    </>
  );
}

export default Member;
