import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../componetns/Button';
import PageNatation from '../../../componetns/PageNatation';
import { useUser } from '../../../context/UserContext';
import axios from 'axios';

function MedicalList() {
  const [searchParams] = useSearchParams();
  const [medicals, setMedicals] = useState([]);
  const id = searchParams.get('id');
  const hCode = searchParams.get('h_code');
  const { user } = useUser();

  const fetch = async () => {
    try {
      if (!user?.id) return;
      if (!id) return;
      // 데이터 fetch해오는 곳
      const { data } = await axios.get('http://localhost:8080/api/appmListOfUser', {
        params: {
          h_code: hCode,
          a_user_id: id,
        },
      });
      console.log(data);
      setMedicals(Array.isArray(data.content) ? data.content : []);
    } catch (error) {
      console.error('error', error);
      return;
    }
  };

  useEffect(() => {
    fetch();
    // if (!user) {
    //   if (user.u_kind === '1') {
    //   } else {
    //     fetch();
    //   }
    // }
  }, [id]);

  return (
    <>
      {user.u_kind === '1' ? (
        <div className="min-h-screen bg-light-02 myBg px-5 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-base">
          <h4 className="tit  my-5 mt-10  px-5 mx-[4vw]">
            <i className="fa-solid fa-hospital text-[16px]"></i>
            {id ? `${id}번 회원님의 진료 내역` : `${user?.name || '회원'} 님의 진료 기록`}
          </h4>

          <div className="w-[90%] flex flex-row flex-wrap justify-between mx-auto ">
            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <h4 className="tit my-3 mt-3 ">
                <span className="material-icons ">local_hospital</span>
                구로 이튼튼 치과
              </h4>

              <ul className="pl-1 my-5 text-gray-500">
                <li>· &nbsp; 진료일자 &nbsp;: 2025 - 11 - 12 </li>
                <li>· &nbsp; 증상 &nbsp;: 잇몸 통증</li>
                <li>· &nbsp; 의사 소견 &nbsp;: 치주염, 치은염</li>
                <li>· &nbsp; 주의 사항 &nbsp;: 딱딱한 음식을 드시지 마세요.</li>
              </ul>

              <div className="flex justify-center gap-5 mb-[10px]  ">
                <Link
                  to="/mypage/medicalList/reviewForm/:id"
                  className="nav-link flex-grow text-center py-2  bg-main-02 text-white rounded-md hover:bg-main-02"
                  onClick={(e) => {
                    if (!user || !user.id) {
                      e.preventDefault();
                      alert('로그인이 필요합니다.');
                    }
                  }}
                >
                  후기 작성 하기
                </Link>
              </div>
            </div>
          </div>
          <div>
            <PageNatation />
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-light-02 myBg px-5 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-base">
          <h4 className="tit  my-5 mt-10  px-5 mx-[4vw]">
            <i className="fa-solid fa-hospital text-[16px]"></i>
            {medicals?.[0]?.u_name || ''}님의 진료 내역
          </h4>

          <ul
            className={`w-[90%] flex flex-row flex-wrap gap-4 ${
              medicals?.length < 4 ? 'md:gap-20' : 'md:justify-between'
            } mx-auto`}
          >
            {medicals?.map((m, i) => {
              return (
                <li className="w-full sm:w-[45%] lg:w-[30%] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
                  <h4 className="tit my-3 mt-3 ">
                    <span className="material-icons ">local_hospital</span>
                    {m.h_name || ''}
                  </h4>

                  <ul className="pl-1 my-5 text-gray-500">
                    <li>· &nbsp; 진료일자 &nbsp;: {m.a_date || ''} </li>
                    <li>· &nbsp; 증상 &nbsp;: {m.text || ''}</li>
                    <li>· &nbsp; 의사 소견 &nbsp;: {m.a_dia_name || '진료 대기 중입니다.'}</li>
                    <li>· &nbsp; 주의 사항 &nbsp;: {m.a_dia_content || '진료 대기 중입니다.'}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
          <div>
            <PageNatation />
          </div>
        </div>
      )}
    </>
  );
}

export default MedicalList;
