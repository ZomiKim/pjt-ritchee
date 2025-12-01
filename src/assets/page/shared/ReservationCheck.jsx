import React from "react";
import { useSearchParams } from "react-router-dom";

function ReservationCheck() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      {/* Please refer to
    
      /map/reservationForm/reservationCheck?id=1
    */}
      <div>{id ? `${id} 님의 예약 내역 확인` : "예약 내역 확인"}</div>
    </>
  );
}

export default ReservationCheck;
