import React from 'react';

function ReservationForm() {
  return (
    <>
      <div className="myBg bg-light-02 h-screen">
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
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-white focus:border-main-01"
              />
              <input
                type="text"
                placeholder="증상"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-white focus:border-main-01"
              />
              <input
                type="text"
                placeholder="이름"
                className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 mb-[5px] border border-white focus:border-main-01"
              />
              <div className="w-[130px] flex justify-between my-2.5">
                <div>
                  <span class="material-icons">radio_button_checked</span>
                  <span className="dummy">남</span>
                </div>
                <div>
                  <span class="material-icons">radio_button_unchecked</span>
                  <span className="dummy">여</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
