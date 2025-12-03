import React from 'react';
import Button from '../../../componetns/Button';

function ReservationForm() {
  return (
    <>
      <div className="myBg bg-light-02 h-screen mb-[50px]">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff' }}>
          <div className="container">
            <h4 className="tit mb-5">
              <i className="fa-solid fa-tooth"></i>
              진료 예약 하기
            </h4>
            <form>
              <input
                type="text"
                placeholder="병원명"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <input
                type="text"
                placeholder="증상"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <input
                type="text"
                placeholder="이름"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <div className="w-[130px] flex justify-between my-2.5">
                {/* onclick으로 변경 예정 */}
                <div className="flex items-center gap-[5px]">
                  <span className="material-icons text-main-02">radio_button_checked</span>
                  <span className="dummy">남</span>
                </div>
                <div className="flex items-center gap-[5px]">
                  <span className="material-icons text-main-02">radio_button_unchecked</span>
                  <span className="dummy">여</span>
                </div>
              </div>
              <input
                type="text"
                placeholder="예약 일자"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <input
                type="text"
                placeholder="예약 시간"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <input
                type="text"
                placeholder="연락처"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              />
              <textarea
                id="etc"
                name="etc"
                rows="4"
                placeholder="특이 사항"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-main-01 focus:border-main-02"
              ></textarea>
              {/* onclick으로 변경 예정 */}
              <div className="flex gap-[7px] mb-[50px]">
                {/* <span className="material-icons text-main-02">check_box_outline_blank</span> */}
                <span className="material-icons text-main-02">check_box</span>
                <label htmlFor="privacy" className="dummy text-gray-deep">
                  병원 예약을 위해 기본 개인정보를 수집·이용합니다. 예약 완료 후 관련 법령에 따라 보관 후 파기합니다.
                </label>
              </div>
              <Button size="long">예약하기</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
