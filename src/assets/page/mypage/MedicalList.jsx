import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PageNatation from '../../../componetns/PageNatation';
import { useUser } from '../../../context/UserContext';
import { getHospitalList, getMedicalList } from '../../../api/hospital_medicallist';
import Button from '../../../componetns/Button';

function MedicalList() {
  const [searchParams] = useSearchParams();
  const [medicals, setMedicals] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const nav = useNavigate();

  const pageSize = 6;
  const id = searchParams.get('id');
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = id || user?.id;
        if (!userId) return;

        const medicalData = await getMedicalList(userId, page, pageSize);
        const hospitalData = await getHospitalList();

        const hospitalMap = {};
        hospitalData.forEach((h) => {
          hospitalMap[h.h_code] = h.h_name;
        });

        const mergedList = medicalData.content.map((item) => ({
          ...item,
          h_name: hospitalMap[item.h_code] || '병원 정보 없음',
        }));
        console.log(mergedList);
        setList(mergedList);
        setTotalPages(medicalData.totalPages);
      } catch (error) {
        console.error('진료 기록 조회 실패 : ', error);
      }
    };

    fetchData();
  }, [id, user, page]);

  return (
    <>
      {user?.u_kind === '1' ? (
        <div className="min-h-screen bg-light-02 myBg px-5 py-2">
          <h4 className="tit my-5 mt-10 px-5 mx-[4vw]">
            <i className="fa-solid fa-hospital text-[16px]"></i>
            {id ? `${id}번 회원님의 진료 내역` : `${user?.name || '회원'} 님의 진료 기록`}
          </h4>

          <div
            className={`w-[90%] flex flex-row flex-wrap ${
              list.length < 4 ? 'md:gap-20' : 'md:justify-between'
            } mx-auto gap-4`}
          >
            {list.map((item) => (
              <div
                key={item.a_id}
                className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-700 shadow-lg flex flex-col"
              >
                <h4 className="tit my-3 flex items-center gap-2">
                  <span className="material-icons">local_hospital</span>
                  {item.h_name}
                  {item.r_id}
                </h4>

                <ul className="pl-1 text-gray-500 space-y-2 mb-5">
                  <li>· 진료일자 : {item.a_date}</li>
                  <li>· 증상 : {item.a_dia_name}</li>
                  <li>· 의사 소견 : {item.a_dia_content}</li>
                  <li className="dummy text-red-400 pl-1">
                    {item.r_able_yn === 'Y' ? null : '리뷰 작성 전이나 의사 소견 입력 후에 후기 작성이 가능합니다.'}
                  </li>
                </ul>

                <div className="flex justify-center gap-5 mt-auto">
                  <Button
                    onClick={() =>
                      nav(`/mypage/medicalList/reviewForm/${item.a_id}`, {
                        state: {
                          hospitalCode: item.h_code,
                          hospitalName: item.h_name,
                          a_id: item.a_id,
                        },
                      })
                    }
                    className={`${
                      item.r_able_yn === 'Y' ? 'bg-main-02 !hover:bg-main-02' : 'bg-gray-mid pointer-events-none'
                    } flex-grow text-center py-2  text-white rounded-md `}
                  >
                    후기 작성 하기
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <PageNatation currentPage={page} totalPages={totalPages} onPageChange={(newPage) => setPage(newPage)} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-light-02 myBg px-5 py-2">
          <h4 className="tit my-5 mt-10 px-5 mx-[4vw]">
            <i className="fa-solid fa-hospital text-[16px]"></i>
            {medicals?.[0]?.u_name || ''}님의 진료 내역
          </h4>

          <ul
            className={`w-[90%] flex flex-row flex-wrap gap-4 ${
              medicals.length < 4 ? 'md:gap-20' : 'md:justify-between'
            } mx-auto`}
          >
            {medicals.map((m, i) => (
              <li
                key={i}
                className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-700 shadow-lg"
              >
                <h4 className="tit my-3 flex items-center gap-2">
                  <span className="material-icons">local_hospital</span>
                  {m.h_name || ''}
                </h4>

                <ul className="pl-1 my-5 text-gray-500 space-y-2">
                  <li>· 진료일자 : {m.a_date || ''}</li>
                  <li>· 증상 : {m.text || ''}</li>
                  <li>· 의사 소견 : {m.a_dia_name || '진료 대기 중입니다.'}</li>
                  <li>· 주의 사항 : {m.a_dia_content || '진료 대기 중입니다.'}</li>
                </ul>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-10">
            <PageNatation currentPage={page} totalPages={totalPages} onPageChange={(newPage) => setPage(newPage)} />
          </div>
        </div>
      )}
    </>
  );
}

export default MedicalList;
