import React, { useEffect, useState } from 'react';
import PageNatation from './../../../componetns/PageNatation';
import Button from '../../../componetns/Button';
import { useUser } from '../../../context/UserContext';
import { getAppmList, getAppmListDelete } from '../../../api/AppmListApi_Mypg';
import axios from 'axios';

function AppmList() {
  const { user } = useUser();
  const [appmList, setAppmList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;
  const hospitalName = appmList?.[0]?.h_name || '';
  useEffect(() => {
    const fetchAppmList = async () => {
      try {
        if (!user?.id) return;
        // 데이터 fetch해오는 곳
        const { data } = await axios.get(
          'http://localhost:8080/api/appmListOfHospital',
          {
            params: {
              a_user_id: user.id,
              page: currentPage,
              size: itemsPerPage,
            },
          }
        );
        console.log(data.content);
        setAppmList(Array.isArray(data.content) ? data.content : []);
        // API 응답에서 totalPages 또는 totalElements를 사용하여 총 페이지 수 계산
        if (data.totalPages !== undefined) {
          setTotalPages(data.totalPages);
        } else if (data.totalElements !== undefined) {
          setTotalPages(Math.ceil(data.totalElements / itemsPerPage));
        } else {
          // content가 배열인 경우 배열 길이로 계산
          const totalItems = data.content?.length || data.length || 0;
          setTotalPages(Math.ceil(totalItems / itemsPerPage));
        }
      } catch (error) {
        console.error('Error fetching appmList', error);
      }
    };
    fetchAppmList();
  }, [user, currentPage]);

  const handleCancel = async (reservation) => {
    const id = reservation.id ?? reservation.a_id;
    if (!id) {
      alert('예약 ID가 없습니다.');
      return;
    }

    if (!window.confirm('예약을 취소하시겠습니까?')) return;

    try {
      await getAppmListDelete(id);
      alert('예약이 취소되었습니다.');
      // 현재 페이지의 데이터 다시 로드
      const data = await getAppmList(user.id, currentPage, itemsPerPage);
      setAppmList(data.content || data);
      // 총 페이지 수 업데이트
      if (data.totalPages !== undefined) {
        setTotalPages(data.totalPages);
      } else if (data.totalElements !== undefined) {
        setTotalPages(Math.ceil(data.totalElements / itemsPerPage));
      }
      // 현재 페이지에 아이템이 없고 이전 페이지가 있으면 이전 페이지로 이동
      if ((data.content?.length || data.length || 0) === 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    } catch (e) {
      console.error(e);
      alert('예약 취소 실패');
    }
  };

  const handlePageChange = (apiPage) => {
    // pageFn에서 이미 -1을 해서 전달하므로 API 기준(0부터) 페이지 번호
    setCurrentPage(apiPage);
  };

  const formatPhone = (phone) => {
    if (!phone) return '';
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11)
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    if (digits.length === 10)
      return digits.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    return phone;
  };

  return (
    <div className="min-h-screen bg-light-02 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
      <div className="container flex flex-col max-w-screen-xl mx-auto">
        <h4 className="tit my-5 mt-10 mx-[1vw] break-words">
          <span className="material-icons">alarm</span>
          {hospitalName || '병원'}의 예약 내역
        </h4>

        {/* 중간에서 절대 깨지지 않는 Grid */}
        <div
          className="
        w-full
        grid 
        gap-6
        grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
        md:flex
        md:flex-wrap
        md:justify-between
        md:[&>div]:w-[45%]
        2xl:grid
        2xl:grid-cols-3
        2xl:[&>div]:w-full
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
              <ul className=" pl-1 space-y-2 text-gray-500 overflow-hidden break-words">
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
                <li className="break-words">
                  · 진단명: {reservation.a_dia_name}
                </li>
                <li className="break-words">
                  · 진단 내용: {reservation.a_dia_content}
                </li>
              </ul>

              <div className="flex flex-wrap justify-between w-full mt-5 gap-2">
                <Button
                  size="mid"
                  variant="primary"
                  className="flex-1 min-w-[100px]"
                  onClick={() =>
                    alert('수정중입니다. 병원 연락처로 문의바랍니다.')
                  }
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

        {totalPages > 1 && (
          <PageNatation
            totalPages={totalPages}
            currentPage={currentPage + 1}
            pageFn={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default AppmList;
