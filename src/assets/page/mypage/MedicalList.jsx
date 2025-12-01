import React from "react";
import { useSearchParams } from "react-router-dom";

function MedicalList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <div>{id ? `${id}번 회원님의 진료 내역` : "진료 내역"}</div>
    </>
  );
}

export default MedicalList;
