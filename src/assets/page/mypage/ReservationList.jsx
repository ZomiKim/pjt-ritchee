import React, { useEffect, useState } from "react";
import PageNatation from "./../../../componetns/PageNatation";
import Button from "../../../componetns/Button";
import { useUser } from "../../../context/UserContext";
import { getAppmList, getAppmListDelete } from "../../../api/AppmListApi_Mypg";

function ReservationList() {
  const { user } = useUser();
  const [appmList, setAppmList] = useState([]);

  useEffect(() => {
    const fetchAppmList = async () => {
      try {
        if (!user?.id) return;
        const data = await getAppmList(user.id, 0, 100);
        setAppmList(data.content || data);
      } catch (error) {
        console.error("Error fetching appmList", error);
      }
    };
    fetchAppmList();
  }, [user]);

  // 예약 취소 처리
  const handleCancel = async (reservation) => {
    // reservation 객체에서 실제 id 확인
    const id = reservation.id ?? reservation.a_id;
    if (!id) {
      alert("예약 ID가 없습니다.");
      return;
    }

    if (!window.confirm("예약을 취소하시겠습니까?")) return;

    try {
      await getAppmListDelete(id);
      alert("예약이 취소되었습니다.");

      // UI에서 해당 예약 제거
      setAppmList((prev) => prev.filter((item) => (item.id ?? item.a_id) !== id));
    } catch (e) {
      console.error(e);
      alert("예약 취소 실패");
    }
  };

  const formatPhone = (phone) => {
    if (!phone) return "";
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 11) return digits.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    if (digits.length === 10) return digits.replace(/(\d{2,3})(\d{3,4})(\d{4})/, "$1-$2-$3");
    return phone;
  };

  return (
    <div className="min-h-screen bg-light-02 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
      <div className="container flex flex-col">
        <h4 className="tit my-5 mt-10 mx-[1vw]">
          <span className="material-icons">alarm</span>
          {user?.name || "회원"} 님의 예약 내역
        </h4>

        <div className="w-full flex flex-row flex-wrap justify-start gap-2 md:gap-3 lg:gap-4 mx-auto">
          {appmList.map((reservation, index) => (
            <div
              key={reservation.id ?? index}
              className="w-full md:w-[calc(25%-0.75rem)] lg:w-[calc(25%-0.75rem)] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg"
            >
              <ul className="pl-1 space-y-2 text-gray-500">
                <h4 className="tit my-3 mt-3">
                  <span className="material-icons">local_hospital</span>
                  {reservation.h_name}
                </h4>
                <li>· 환자명: {reservation.u_name}</li>
                <li>· 증상: {reservation.a_content}</li>
                <li>· 나이: {reservation.age}</li>
                <li>· 성별: {reservation.gender}</li>
                <li>· 예약 일자: {reservation.a_date}</li>
                <li>· 예약 시간: {reservation.a_time}</li>
                <li>· 연락처: {formatPhone(reservation.phone)}</li>
                <li>· 특이 사항: {reservation.text}</li>
                <li>· 진단명: {reservation.a_dia_name}</li>
                <li>· 진단 내용: {reservation.a_dia_content}</li>
              </ul>

              <div className="flex justify-between w-full mb-5">
                <Button size="mid" variant="primary" onClick={() => alert("수정중입니다. 병원 연락처로 문의바랍니다.")}>
                  예약 수정
                </Button>
                <Button size="mid" variant="primary" onClick={() => handleCancel(reservation)}>
                  예약 취소
                </Button>
              </div>
            </div>
          ))}
        </div>

        <PageNatation />
      </div>
    </div>
  );
}

export default ReservationList;
