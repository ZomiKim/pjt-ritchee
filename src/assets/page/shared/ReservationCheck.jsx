import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Button from '../../../componetns/Button';
import { useUser } from '../../../context/UserContext';
import axios from 'axios';
import moment from 'moment';

function ReservationCheck() {
  const { user } = useUser();
  const id = user?.id;
  const [appointment, setAppointment] = useState({});
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('h_code');

  // 현재 유저 예약 내역 가져오기
  const userReservationFetch = async () => {
    try {
      const { data, error } = await axios.get(`http://localhost:8080/api/appmUser/${id}/hCode/${h_code}`);
      console.log(data);
      setAppointment(data);
    } catch (error) {
      console.error('error', error.message);
      return;
    }
  };

  console.log(appointment);
  // 생년월일 -> 만 나이 변환 함수
  function getAge(birthString) {
    const today = new Date();
    const birthDate = new Date(birthString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // 아직 생일이 지나지 않았다면 -1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age) return age;
    else return '35';
  }

  useEffect(() => {
    if (id) {
      userReservationFetch();
    }
  }, [id]);

  let date = moment(appointment?.appms?.[appointment?.appms?.length - 1].a_date).format('YYYY-MM-DD HH시 mm분');

  return (
    <>
      {appointment && appointment.u_kind == '1' ? (
        <div className="myBg bg-light-02 h-screen ">
          <div className="wrap pl-1.5" style={{ backgroundColor: '#f4f8ff' }}>
            <div className="reservation container">
              <h4 className="reservationTitle tit mb-5">
                <span className="material-icons">access_alarm</span>
                {appointment.name || '김훈규'} 님의 예약 내역
              </h4>
              <div className="px-3.5 py-5 mb-7.5 bg-white border border-main-01 rounded-[5px]">
                <div className="hospitalTitle mb-2.5">
                  <h4 className="tit">
                    <span className="material-icons">local_hospital</span>
                    {appointment?.appms?.[appointment.appms.length - 1]?.h_name || '병원명'}
                  </h4>
                </div>
                <div className="reservationBody">
                  <div className="patient dummy text-gray-deep">· 환자명 : {appointment?.name || '김훈규'}</div>
                  <div className="symptom dummy text-gray-deep">
                    · 증상 : {appointment?.appms?.[appointment.appms.length - 1]?.a_content || '어금니 통증'}
                  </div>
                  <div className="age dummy text-gray-deep">
                    · 나이 : {`만 ${getAge(appointment?.birth)}세` || '만 35세'}
                  </div>
                  <div className="gender dummy text-gray-deep">· 성별 : {appointment?.gender?.[0] || '남'}</div>
                  <div className="reservationDate dummy text-gray-deep">
                    · 예약 일자 : {date.split(' ')[0] ?? '2025년 12월 1일'}
                  </div>
                  <div className="reservationTime dummy text-gray-deep">
                    · 예약 시간 : {date.split(' ')[1] + ' ' + date.split(' ')[2] || '14시 15분'}
                  </div>
                  <div className="phoneNumber dummy text-gray-deep">
                    · 연락처 : {appointment?.phone || '010-0000-0000'}
                  </div>
                  <div className="etc dummy text-gray-deep">
                    · 특이 사항 : {appointment?.text || '고혈압, 고지혈증 약 복용 중'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="myBg bg-light-02 h-screen ">
          <div className="wrap pl-1.5" style={{ backgroundColor: '#f4f8ff' }}>
            <div className="reservation container">
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
        </div>
      )}
      {/* Please refer to
    
      /map/reservationForm/reservationCheck?id=1
    */}
      {/* <div>{id ? `${id} 님의 예약 내역 확인` : '예약 내역 확인'}</div> */}
    </>
  );
}

export default ReservationCheck;
