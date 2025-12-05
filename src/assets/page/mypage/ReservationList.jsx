import React from 'react';
import PageNatation from './../../../componetns/PageNatation';
import Button from '../../../componetns/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ReservationList() {
  return (
    <>
      <div className="min-h-screen bg-light-02 myBg px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg  ">
        <div className="container  flex flex-col">
          <h4 className="tit  my-5 mt-10 mx-[4vw]">
            <span className="material-icons">alarm</span>
            김훈규 님의 예약 내역
          </h4>

          <div className="w-[90%] flex flex-row flex-wrap justify-between mx-auto ">
            <div className="w-full lg:w-[48%] max-w-[600px] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <ul className="pl-1 space-y-2 text-gray-500">
                <h4 className="tit my-3 mt-3 ">
                  <span className="material-icons ">local_hospital</span>
                  구로 이튼튼 치과
                </h4>

                <li>· &nbsp; 환자명 &nbsp;: 김훈규 </li>
                <li>· &nbsp; 증상 &nbsp;: 어금니 통증</li>
                <li>· &nbsp; 나이 &nbsp;: 만 30세</li>
                <li>· &nbsp; 성별 &nbsp;: 남</li>
                <li>· &nbsp; 예약 일자 &nbsp;: 2025 - 11 - 11</li>
                <li>· &nbsp; 예약 시간 &nbsp;: 14시 15분</li>
                <li>· &nbsp; 연락처 &nbsp;: 010 - 0000 - 0000</li>
                <li>· &nbsp; 특이 사항 &nbsp;: 고혈압, 고지혈증 약 봉용 중</li>
                <li>· &nbsp; 진단 내용 &nbsp;: 진료 대기중입니다</li>
              </ul>

              <div className="flex justify-between w-full mb-5">
                <Button size="mid" variant="primary">
                  예약 수정
                </Button>
                <Button
                  size="mid"
                  variant="primary"
                  onClick={() => alert('예약이 취소되었습니다')}
                >
                  예약 취소
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-[48%] max-w-[600px] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <ul className="pl-1 space-y-2 text-gray-500">
                <h4 className="tit my-3 mt-3 ">
                  <span className="material-icons ">local_hospital</span>
                  구로 이튼튼 치과
                </h4>

                <li>· &nbsp; 환자명 &nbsp;: 김훈규 </li>
                <li>· &nbsp; 증상 &nbsp;: 어금니 통증</li>
                <li>· &nbsp; 나이 &nbsp;: 만 30세</li>
                <li>· &nbsp; 성별 &nbsp;: 남</li>
                <li>· &nbsp; 예약 일자 &nbsp;: 2025 - 11 - 11</li>
                <li>· &nbsp; 예약 시간 &nbsp;: 14시 15분</li>
                <li>· &nbsp; 연락처 &nbsp;: 010 - 0000 - 0000</li>
                <li>· &nbsp; 특이 사항 &nbsp;: 고혈압, 고지혈증 약 봉용 중</li>
                <li>· &nbsp; 진단 내용 &nbsp;: 진료 대기중입니다</li>
              </ul>

              <div className="flex justify-between w-full mb-5">
                <Button size="mid" variant="primary">
                  예약 수정
                </Button>
                <Button
                  size="mid"
                  variant="primary"
                  onClick={() => alert('예약이 취소되었습니다')}
                >
                  예약 취소
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-[48%] max-w-[600px] border p-4 rounded-lg mb-5 bg-white text-gray-200 shadow-lg">
              <ul className="pl-1 space-y-2 text-gray-500">
                <h4 className="tit my-3 mt-3 ">
                  <span className="material-icons ">local_hospital</span>
                  구로 이튼튼 치과
                </h4>

                <li>· &nbsp; 환자명 &nbsp;: 김훈규 </li>
                <li>· &nbsp; 증상 &nbsp;: 어금니 통증</li>
                <li>· &nbsp; 나이 &nbsp;: 만 30세</li>
                <li>· &nbsp; 성별 &nbsp;: 남</li>
                <li>· &nbsp; 예약 일자 &nbsp;: 2025 - 11 - 11</li>
                <li>· &nbsp; 예약 시간 &nbsp;: 14시 15분</li>
                <li>· &nbsp; 연락처 &nbsp;: 010 - 0000 - 0000</li>
                <li>· &nbsp; 특이 사항 &nbsp;: 고혈압, 고지혈증 약 봉용 중</li>
                <li>· &nbsp; 진단 내용 &nbsp;: 진료 대기중입니다</li>
              </ul>

              <div className="flex justify-between w-full mb-5">
                <Button size="mid" variant="primary">
                  예약 수정
                </Button>
                <Button
                  size="mid"
                  variant="primary"
                  onClick={() => alert('예약이 취소되었습니다')}
                >
                  예약 취소
                </Button>
              </div>
            </div>
          </div>

          <PageNatation />
        </div>
      </div>
    </>
  );
}
const Component = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success('정보가 수정되었습니다!');

    setTimeout(() => {
      navigate('/next-page'); // 이동할 경로
    }, 1000);
  };

  return (
    <Button size="long" variant="primary" onClick={handleClick}>
      정보수정
    </Button>
  );
};

export default ReservationList;
