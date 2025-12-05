import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../../../componetns/Button';

function ReservationCheck() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      {/* 환자 전용 */}
      <div className="myBg bg-light-02 h-screen ">
        <div className="wrap pl-1.5" style={{ backgroundColor: '#f4f8ff' }}>
          <div className="reservation container">
            <h4 className="reservationTitle tit mb-5">
              <span className="material-icons">access_alarm</span>
              김훈규 님의 예약 내역
            </h4>
            <div className="px-3.5 py-5 mb-7.5 bg-white border border-main-01 rounded-[5px]">
              <div className="hospitalTitle mb-2.5">
                <h4 className="tit">
                  <span className="material-icons">local_hospital</span>
                  병원명
                </h4>
              </div>
              <div className="reservationBody">
                <div className="patient dummy text-gray-deep">· 환자명 : 김훈규</div>
                <div className="symptom dummy text-gray-deep">· 증상 : 어금니 통증</div>
                <div className="age dummy text-gray-deep">· 나이 : 만 35세</div>
                <div className="gender dummy text-gray-deep">· 성별 : 남</div>
                <div className="reservationDate dummy text-gray-deep">· 예약 일자 : 25 - 11 - 11</div>
                <div className="reservationTime dummy text-gray-deep">· 예약 시간 : 14시 15분</div>
                <div className="phoneNumber dummy text-gray-deep">· 연락처 : 010 - 2222 -2222</div>
                <div className="etc dummy text-gray-deep">· 특이 사항 : 고혈압, 고지혈증 약 복용 중</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 의료진 전용 */}
      {/* <div className="myBg bg-main-01 h-screen mb-[50px]">
        <div className="wrap" style={{ backgroundColor: '#a1c5ff' }}>
          <div className="container">
            <h4 className="reservationTitle tit mb-5">
              <span className="material-icons">health_and_safety</span>
              소견서 작성
            </h4>
            <form>
              <input
                type="text"
                placeholder="증상"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <textarea
                id="opinion"
                name="opinion"
                rows="4"
                placeholder="의사 소견"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              ></textarea>
              <textarea
                id="warning"
                name="warning"
                rows="4"
                placeholder="주의 사항"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              ></textarea>
              <Button size="long">의사 소견 작성</Button>
            </form>
          </div>
        </div>
      </div> */}
      {/* Please refer to
    
      /map/reservationForm/reservationCheck?id=1
    */}
      {/* <div>{id ? `${id} 님의 예약 내역 확인` : '예약 내역 확인'}</div> */}
    </>
  );
}

export default ReservationCheck;
