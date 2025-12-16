import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../componetns/Button';
import PageNatation from '../../../componetns/PageNatation';
import { useUser } from '../../../context/UserContext';
import { getHospitalList, getMedicalList } from '../../../api/hospital_medicallist';

function MedicalList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { user } = useUser();

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // 한 페이지당 아이템 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 유저 ID 결정: URL id > 로그인 유저 ID
        const userId = id || user?.id;
        if (!userId) return;

        // 유저 진료 기록 조회 (페이지네이션)
        const medicalData = await getMedicalList(userId, page, pageSize);
        const hospitalData = await getHospitalList();

        // 병원 목록을 h_code 기준 Map 생성
        const hospitalMap = {};
        hospitalData.forEach((h) => {
          hospitalMap[h.h_code] = h.h_name;
        });

        // 진료 기록 + 병원 이름 합치기
        const mergedList = medicalData.content.map((item) => ({
          ...item,
          h_name: hospitalMap[item.h_code] || '병원 정보 없음',
        }));

        setList(mergedList);
        setTotalPages(medicalData.totalPages); // Spring Data Pageable totalPages 사용
      } catch (error) {
        console.error('진료 기록 조회 실패 : ', error);
      }
    };

    fetchData();
  }, [id, user, page]);

  return (
    <>
      <div className="min-h-screen bg-light-02 myBg px-5 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-base">
        <h4 className="tit  my-5 mt-10  px-5 mx-[4vw]">
          <i className="fa-solid fa-hospital text-[16px]"></i>
          {id ? `${id}번 회원님의 진료 내역` : `${user?.name || '회원'} 님의 진료 기록`}
        </h4>

        <div
          className={`w-[90%] flex flex-row flex-wrap ${
            list.length < 4 ? 'md: gap-20' : 'md: justify-between'
          } mx-auto space-x-2`}
        >
          {list.map((item) => (
            <div
              key={item.a_id}
              className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-700 shadow-lg flex flex-col"
            >
              <h4 className="tit my-3 mt-3 flex items-center gap-2">
                <span className="material-icons">local_hospital</span>
                {item.h_name}
              </h4>

              <ul className="pl-1 text-gray-500 space-y-2">
                <li>· &nbsp; 진료일자 &nbsp;: {item.a_date}</li>
                <li>· &nbsp; 증상 &nbsp;: {item.a_content}</li>
                {/* <li>· &nbsp; 진단명 &nbsp;: {item.a_dia_name}</li>
                <li>· &nbsp; 진료내용 &nbsp;: {item.a_dia_content}</li> */}
                <li>· &nbsp; 의사 소견 &nbsp;: {item.text}</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]">
                <Link
                  to={`/mypage/medicalList/reviewForm/${item.a_id}`}
                  state={{
                    hospitalCode: item.h_code,
                    hospitalName: item.h_name,
                    a_id: item.a_id,
                  }}
                  className="flex-grow text-center py-2 bg-main-02 text-white rounded-md hover:bg-main-02"
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div>
          <PageNatation currentPage={page} totalPages={totalPages} onPageChange={(newPage) => setPage(newPage)} />
        </div>
      </div>
    </>
  );
}

export default MedicalList;
