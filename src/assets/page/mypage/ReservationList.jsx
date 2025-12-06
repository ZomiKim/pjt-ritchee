import React from "react";
import PageNatation from "./../../../componetns/PageNatation";
import Button from "../../../componetns/Button";
import { useUser } from "../../../context/UserContext";

function ReservationList() {
  const { user } = useUser();
  // 예약 데이터 배열
  const reservations = [
    {
      id: 1,
      hospital: "구로 이튼튼 치과",
      patientName: "김훈규",
      symptom: "어금니 통증",
      age: "만 30세",
      gender: "남",
      date: "2025 - 11 - 11",
      time: "14시 15분",
      phone: "010 - 0000 - 0000",
      note: "고혈압 약 복용 중",
      diagnosis: "진료 대기중입니다",
    },
    {
      id: 2,
      hospital: "구로 이튼튼 치과",
      patientName: "이하늘",
      symptom: "어금니 통증",
      age: "만 30세",
      gender: "남",
      date: "2025 - 11 - 11",
      time: "14시 15분",
      phone: "010 - 0000 - 0000",
      note: "고혈압 약 복용 중",
      diagnosis: "진료 대기중입니다",
    },
    {
      id: 3,
      hospital: "구로 이튼튼 치과",
      patientName: "홍지승",
      symptom: "어금니 통증",
      age: "만 30세",
      gender: "남",
      date: "2025 - 11 - 11",
      time: "14시 15분",
      phone: "010 - 0000 - 0000",
      note: "고혈 약 복용 중",
      diagnosis: "진료 대기중입니다",
    },
  ];

  const handleCancel = () => {
    alert("예약이 취소되었습니다");
  };

  return (
    <>
      <div className="min-h-screen bg-light-02 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
        <div className="container flex flex-col">
          <h4 className="tit my-5 mt-10 mx-[1vw]">
            <span className="material-icons">alarm</span>
            {user?.name || "회원"} 님의 예약 내역
          </h4>

          <div className="w-full flex flex-row flex-wrap justify-between gap-2 md:gap-3 lg:gap-4 mx-auto">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-1.067rem)] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg"
              >
                <ul className="pl-1 space-y-2 text-gray-500">
                  <h4 className="tit my-3 mt-3">
                    <span className="material-icons">local_hospital</span>
                    {reservation.hospital}
                  </h4>

                  <li>· &nbsp; 환자명 &nbsp;: {reservation.patientName}</li>
                  <li>· &nbsp; 증상 &nbsp;: {reservation.symptom}</li>
                  <li>· &nbsp; 나이 &nbsp;: {reservation.age}</li>
                  <li>· &nbsp; 성별 &nbsp;: {reservation.gender}</li>
                  <li>· &nbsp; 예약 일자 &nbsp;: {reservation.date}</li>
                  <li>· &nbsp; 예약 시간 &nbsp;: {reservation.time}</li>
                  <li>· &nbsp; 연락처 &nbsp;: {reservation.phone}</li>
                  <li>· &nbsp; 특이 사항 &nbsp;: {reservation.note}</li>
                  <li>· &nbsp; 진단 내용 &nbsp;: {reservation.diagnosis}</li>
                </ul>

                <div className="flex justify-between w-full mb-5">
                  <Button size="mid" variant="primary">
                    예약 수정
                  </Button>
                  <Button size="mid" variant="primary" onClick={handleCancel}>
                    예약 취소
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <PageNatation />
        </div>
      </div>
    </>
  );
}

export default ReservationList;
