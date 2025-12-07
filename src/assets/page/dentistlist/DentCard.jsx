import React from 'react';

const DentCard = ({ hospital }) => {
  return (
    <div
      className="bg-white py-6 px-3 rounded-sm mb-5"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
    >
      <div className="tab_cont_tit flex flex-row md:flex-col items-center md:items-start mb-5">
        <h4 className="tit mr-4" id="cardId">
          <span className="material-icons">local_hospital</span>
          {hospital.h_name || '병원명'}
        </h4>
        <div className="stars flex flex-row text-point items-center">
          <span className="mr-1">{hospital.avg_eval_pt || '4.4'}</span>
          <div className="flex flex-row text-point items-center">
            {Array.from({ length: 5 }).map((_, i) => {
              if (hospital.avg_eval_pt >= i + 1)
                return (
                  <span key={i} className="material-icons">
                    star
                  </span>
                );
              if (hospital.avg_eval_pt > i && hospital.avg_eval_pt < i + 1)
                return (
                  <span key={i} className="material-icons">
                    star_half
                  </span>
                );
              return (
                <span key={i} className="material-icons">
                  star_outline
                </span>
              );
            })}
          </div>
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
          <div className="addr flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <span
                className="material-icons text-white"
                style={{ fontSize: '14px' }}
              >
                location_on
              </span>
            </div>
            <div className="dummy text-gray-deep">
              {hospital.h_addr || '주소'}
            </div>
          </div>
          <div className="tel flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <div
                className="material-icons text-white"
                style={{ fontSize: '14px' }}
              >
                phone
              </div>
            </div>
            <span className="dummy text-gray-deep">
              {hospital.h_tel1 || '02-000-0000'} /{' '}
              {hospital.h_tel2 || '010-0000-0000'}
            </span>
          </div>
          <div className="review flex gap-[5px] mb-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <span
                className="material-icons text-white"
                style={{ fontSize: '14px' }}
              >
                edit_calendar
              </span>
            </div>
            <div className="dummy text-gray-deep">
              진료 이용 후기{' '}
              {hospital.review_cnt > 0 ? hospital.review_cnt : '0'}건, 댓글
              {hospital.comment_cnt || '0'}건
            </div>
          </div>
          <div className="etc flex gap-[5px]">
            <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center p-2.5">
              <span
                className="material-icons text-white"
                style={{ fontSize: '14px' }}
              >
                filter_vintage
              </span>
            </div>
            <div className="dummy text-gray-deep">
              {hospital.h_park_yn || '내용 없음'}
              {hospital.h_bigo.includes('점심') ? '' : `, ${hospital.h_bigo}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentCard;
