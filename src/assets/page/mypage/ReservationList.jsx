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

  const handleCancel = async (reservation) => {
    const id = reservation.id ?? reservation.a_id;
    if (!id) {
      alert("예약 ID가 없습니다.");
      return;
    }

    if (!window.confirm("예약을 취소하시겠습니까?")) return;

    try {
      await getAppmListDelete(id);
      alert("예약이 취소되었습니다.");
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
      <div className="container flex flex-col max-w-screen-xl mx-auto">
        <h4 className="tit my-5 mt-10 mx-[1vw] break-words">
          <span className="material-icons">alarm</span>
          {user?.name || "회원"} 님의 예약 내역
        </h4>

        {/* 중간에서 절대 깨지지 않는 Grid */}
        <div
          className="
        w-full
        grid 
        gap-6
        grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        mx-auto
      "
        >
          {appmList.map((reservation, index) => (
            <div
              key={reservation.id ?? index}
              className="
            border p-4 rounded-lg bg-white text-gray-200 shadow-lg 
            flex flex-col justify-between
            break-words overflow-hidden
          "
            >
              <ul className="pl-1 space-y-2 text-gray-500 overflow-hidden break-words">
                <h4 className="tit my-3 mt-3 flex items-center gap-1 break-words overflow-hidden">
                  <span className="material-icons">local_hospital</span>
                  {reservation.h_name}
                </h4>
                <li className="break-words">· 환자명: {reservation.u_name}</li>
                <li className="break-words">· 증상: {reservation.a_content}</li>
                <li>· 나이: {reservation.age}</li>
                <li>· 성별: {reservation.gender}</li>
                <li>· 예약 일자: {reservation.a_date}</li>
                <li>· 예약 시간: {reservation.a_time}</li>
                <li>· 연락처: {formatPhone(reservation.phone)}</li>
                <li className="break-words">· 특이 사항: {reservation.text}</li>
                <li className="break-words">· 진단명: {reservation.a_dia_name}</li>
                <li className="break-words">· 진단 내용: {reservation.a_dia_content}</li>
              </ul>

              <div className="flex flex-wrap justify-between w-full mt-5 gap-2">
                <Button
                  size="mid"
                  variant="primary"
                  className="flex-1 min-w-[100px]"
                  onClick={() => alert("수정중입니다. 병원 연락처로 문의바랍니다.")}
                >
                  예약 수정
                </Button>

                <Button
                  size="mid"
                  variant="primary"
                  className="flex-1 min-w-[100px]"
                  onClick={() => handleCancel(reservation)}
                >
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
