import React, { useEffect, useState } from 'react';
import Button from '../../../componetns/Button';
import DentistReview from './DentistReview';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import supabase from '../../utils/supabase';

function DentistView() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('id');
  const [hospital, setHospital] = useState({ h_name: '', h_addr: '' });
  const fetch = async () => {
    const { data, error } = await supabase.from('hospital').select('*').eq('h_code', h_code).single();
    setHospital((prev) => ({ ...prev, h_name: data.h_name, h_addr: data.h_addr }));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="myBg">
        <img src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png" alt="" />
      </div>

      <div className="wrap">
        <div className="py-5 pl-[3px] mb-7.5">
          <div className="hospitalTitle flex mb-5 justify-between">
            <h4 className="tit">
              <span className="material-icons">local_hospital</span>
              {hospital.h_name}
            </h4>
            <Link
              to={`/map?id=${h_code}`}
              className="bg-point rounded-md w-6 h-6 flex justify-center items-center mt-[3px] p-3"
            >
              <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                location_on
              </span>
            </Link>
          </div>
          <div className="hospitalBody">
            <div className="detail h-[100px] mb-5">
              <div className="addr flex gap-[5px] mb-[5px]">
                <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                  <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                    location_on
                  </span>
                </div>
                <div className="dummy text-gray-deep">주소 : {hospital.h_addr}</div>
              </div>
              <div className="tel flex gap-[5px] mb-[5px]">
                <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                  <div className="material-icons text-white" style={{ fontSize: '14px' }}>
                    access_time_filled
                  </div>
                </div>
                <span className="dummy text-gray-deep">진료 시간 : 09 : 00 ~ 18 : 00</span>
              </div>
              <div className="review flex gap-[5px] mb-[5px]">
                <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                  <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                    restaurant
                  </span>
                </div>
                <div className="dummy text-gray-deep">점심 시간 : 13 : 00 ~ 14 : 00</div>
              </div>
              <div className="etc flex gap-[5px] mb-[5px]">
                <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                  <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                    local_parking
                  </span>
                </div>
                <div className="dummy text-gray-deep">주차 : 건물 지하 2층 차단기 통과 후 이용 가능</div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button size="mid">
                <Link className="w-full" to={`../../map/reservationForm`}>
                  예약하기
                </Link>
              </Button>
              <Button size="mid">
                <Link className="w-full">전화하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <DentistReview />

      {/*Please refer to
      // 그냥 Map으로 이동
      <Link to="/map">지도 보기</Link>
      // 치과 id를 쿼리로 넘기려면
      <Link to={`/map?id=${치과id}`}>지도 보기</Link> */}
    </>
  );
}

export default DentistView;
