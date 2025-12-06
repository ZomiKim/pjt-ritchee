import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../componetns/Button';
import PageNatation from '../../../componetns/PageNatation';

function MedicalList() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <div className="min-h-screen bg-light-02 myBg px-5 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-base">
        <h4 className="tit  my-5 mt-10  px-5 mx-[4vw]">
          <i className="fa-solid fa-hospital text-[16px]"></i>
          {id ? `${id}번 회원님의 진료 내역` : '김훈규 님의 진료 기록'}
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
    </>
  );
}

export default MedicalList;
