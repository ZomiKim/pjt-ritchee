import React from 'react';

const DentCard = () => {
  return (
    <div className="bg-white py-6 px-3 rounded-sm mb-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <div className="hospitalTitle flex mb-5 gap-2.5">
        <h4 className="tit">
          <span className="material-icons">local_hospital</span>
          병원명
        </h4>
        <div className="flex items-center gap-px text-point">
          <span className="dummy">4.4</span>
          {/* 반복문 돌려야됨 */}
          <span className="dummy material-icons">star_outline</span>
          <span className="dummy material-icons">star_outline</span>
          <span className="dummy material-icons">star_outline</span>
          <span className="dummy material-icons">star_outline</span>
          <span className="dummy material-icons">star_outline</span>
        </div>
      </div>
      <div className="hospitalBody">
        <div className="image rounded-sm overflow-hidden">
          <img
            src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
            alt=""
            className=" w-full"
          />
        </div>
        <div className="detail mt-2.5 pl-2 h-[100px]">
          <div className="addr flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                location_on
              </span>
            </div>
            <div className="dummy text-gray-deep">
              서울시 구로구 구로동 구로디지털로32-58 가길 25 티엠타운빌딩 1층 505호
            </div>
          </div>
          <div className="tel flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
              <div className="material-icons text-white" style={{ fontSize: '14px' }}>
                phone
              </div>
            </div>
            <span className="dummy text-gray-deep">010-1234-5678</span>
          </div>
          <div className="review flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                edit_calendar
              </span>
            </div>
            <div className="dummy text-gray-deep">진료 이용 후기 888건</div>
          </div>
          <div className="etc flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                filter_vintage
              </span>
            </div>
            <div className="dummy text-gray-deep">주차 가능</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentCard;
