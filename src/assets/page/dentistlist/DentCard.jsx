import React from 'react';

const DentCard = ({ child }) => {
  return (
    <div className="bg-white py-6 px-3 rounded-sm mb-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <div className="hospitalTitle flex mb-5 gap-2.5">
        <h4 className="tit">
          <span className="material-icons">local_hospital</span>
          {child.h_name}
        </h4>
        <div className="stars flex flex-row text-point items-center">
          <span className="mr-1">4.4</span>
          <div className="flex flex-row text-point items-center">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star_outline</span>
          </div>
        </div>
      </div>
      <div className="hospitalBody mb-[25px]">
        <div className="image rounded-sm overflow-hidden">
          <img
            src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
            alt=""
            className=" w-full"
          />
        </div>
        <div className="detail mt-2.5 pl-2 h-[100px]">
          <div className="addr flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                location_on
              </span>
            </div>
            <div className="dummy text-gray-deep">{child.h_addr}</div>
          </div>
          <div className="tel flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <div className="material-icons text-white" style={{ fontSize: '14px' }}>
                phone
              </div>
            </div>
            <span className="dummy text-gray-deep">
              {child.h_tel1} / {child.h_tel2}
            </span>
          </div>
          <div className="review flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                edit_calendar
              </span>
            </div>
            <div className="dummy text-gray-deep">진료 이용 후기 888건</div>
          </div>
          <div className="etc flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
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
