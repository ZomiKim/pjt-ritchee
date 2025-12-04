import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Circle, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDent } from '../../../context/DentContext';
import Button from '../../../componetns/Button';
import supabase from '../../utils/supabase';

function MapPage() {
  const { hospital } = useDent();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('id');
  const [location, setLocation] = useState({
    center: {
      lat: 37.5665,
      lng: 126.978,
    },
    isPanto: false,
  });

  const fetch = async () => {
    const { data, error } = await supabase.from('hospital').select('*').eq('h_code', h_code).single();
    console.log(data);
    setLocation({
      center: {
        lat: data.h_lat,
        lng: data.h_long,
      },
      isPanto: true,
    });
  };

  useEffect(() => {
    // 내장 스크립트 naviagator로 현재 위치 가져와서 location에 저장
    const getPosition = () => {
      if (navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            setLocation((prev) => ({
              ...prev,
              center: { lat, lng },
            }));
          },
          (err) => {
            console.error(err);
          },
          {
            enableHighAccuracy: true,
          }
        );
      } else console.error('navigator가 없습니다!');
    };
    if (h_code != null) fetch();
    else getPosition();
  }, []);

  return (
    <>
      {/* 귀찮으니 맵 디자인은 나중에 */}
      <Map
        center={location.center}
        isPanto={location.isPanto}
        level={0}
        style={{ width: '100vw', height: h_code ? '50vh' : '93vh' }}
        className="myBg"
      >
        {hospital.map((h, i) => {
          return (
            <MapMarker
              position={{ lat: h.h_lat, lng: h.h_long }}
              infoWindowOptions={{
                disableAutoPan: true,
              }}
              key={i}
              image={{
                src: 'https://cdn.discordapp.com/attachments/1439908196004397202/1445624141901463563/image.png?ex=693105e5&is=692fb465&hm=61efb716b8326030f767aa19201de8d14e3668c798b5de338b2ecce5aef9a0eb&', // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
            >
              <div style={{ color: '#000' }}>{h.h_name}</div>
            </MapMarker>
          );
        })}
      </Map>
      {h_code ? (
        <div className="myBg bg-light-02">
          <div className="wrap mb-[50px]" style={{ backgroundColor: '#f4f8ff' }}>
            <div className="container bg-white border border-main-01 rounded-[5px]">
              <div className="hospital px-3.5 py-[15px]">
                <div className="hospitalTitle mb-2.5">
                  <h4 className="tit">
                    <span className="material-icons">local_hospital</span>
                    병원명
                  </h4>
                </div>
                <div className="hospitalBody">
                  <div className="detail h-[100px] mb-5">
                    <div className="addr flex gap-[5px] mb-[5px]">
                      <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                        <span className="material-icons text-white" style={{ fontSize: '14px' }}>
                          location_on
                        </span>
                      </div>
                      <div className="dummy text-gray-deep">
                        주소 : 서울시 구로구 구로동 구로디지털로32-58 가길 25 티엠타운빌딩 1층 505호
                      </div>
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
                      <div className="dummy text-gray-deep">점심 시간 : 09 : 00 ~ 18 : 00</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button size="mid" className="m-0">
                      <Link className="w-full" to={`/map/reservationForm`}>
                        예약하기
                      </Link>
                    </Button>

                    <Button size="mid" className="m-0">
                      <Link className="w-full">전화하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MapPage;
