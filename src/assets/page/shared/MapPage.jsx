import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDent } from '../../../context/DentContext';
import Button from '../../../componetns/Button';
import supabase from '../../utils/supabase';
import axios from 'axios';

function MapPage() {
  // const { hospital } = useDent();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('id');
  const [hospital, setHospital] = useState({});
  const [location, setLocation] = useState({
    center: {
      lat: 37.5665,
      lng: 126.978,
    },
    isPanto: false,
  });

  // h_code 달고 올 때 함수
  const fetch = async () => {
    const { data, error } = await axios.get(
      `http://localhost:8080/api/hs_info/${h_code}`
    );

    if (error) {
      console.error('Single Hospital Info Fetch Error', error.message);
      return;
    }

    console.log(data);
    setHospital(data);
    setLocation({
      center: {
        lat: data.h_lat,
        lng: data.h_long,
      },
      isPanto: true,
    });
  };

  useEffect(() => {
    // 내장 스크립트 naviagator로 현재 위치 가져와서 location에 저장 (h_code 없이 올 때 함수)
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
      <Map
        center={location.center}
        isPanto={location.isPanto}
        level={0}
        style={{ height: h_code ? '50vh' : '93vh' }}
        className="myBg"
      >
        {h_code ? (
          <>
            <MapMarker
              position={{ lat: location.center.lat, lng: location.center.lng }}
              infoWindowOptions={{
                disableAutoPan: true,
              }}
              image={{
                src: 'https://uosmaiisnppqgxbcbawc.supabase.co/storage/v1/object/public/images/mapmarker.png', // 마커이미지의 주소입니다
                size: {
                  width: 35,
                  height: 53,
                }, // 마커이미지의 크기입니다
              }}
            />

            <CustomOverlayMap
              position={{ lat: location.center.lat, lng: location.center.lng }}
              yAnchor={1.9}
            >
              <div className="bg-white border-2 border-main-02 rounded-[5px] px-3 py-[5px] mt-[3px]">
                {hospital.h_name}
                <div className="stars flex flex-row text-point items-end">
                  <span className="mr-1 text-[10px]!">
                    {hospital.avg_eval_pt == 0 ? '(4.4)' : hospital.avg_eval_pt}
                  </span>
                  <div className="flex flex-row text-point items-center">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_outline</span>
                  </div>
                </div>
              </div>
            </CustomOverlayMap>
          </>
        ) : null}
      </Map>
      {h_code ? (
        <div className="myBg bg-light-02">
          <div
            className="wrap mb-[50px]"
            style={{ backgroundColor: '#f4f8ff' }}
          >
            <div className="container bg-white border border-main-01 rounded-[5px]">
              <div className="hospital px-3.5 py-[15px]">
                <div className="hospitalTitle mb-2.5">
                  <h4 className="tit">
                    <span className="material-icons">local_hospital</span>
                    {hospital.h_name}
                  </h4>
                </div>
                <div className="hospitalBody">
                  <div className="detail h-[100px] mb-5">
                    <div className="addr flex gap-[5px] mb-[5px]">
                      <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                        <span
                          className="material-icons text-white"
                          style={{ fontSize: '14px' }}
                        >
                          location_on
                        </span>
                      </div>
                      <div className="dummy text-gray-deep mt-1">
                        주소 : {hospital.h_addr}
                      </div>
                    </div>
                    <div className="tel flex gap-[5px] mb-[5px]">
                      <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                        <div
                          className="material-icons text-white"
                          style={{ fontSize: '14px' }}
                        >
                          access_time_filled
                        </div>
                      </div>
                      <span className="dummy text-gray-deep mt-1">
                        진료 시간 : 09 : 00 ~ 18 : 00
                      </span>
                    </div>
                    <div className="review flex gap-[5px] mb-[5px]">
                      <div className="bg-main-02 rounded-full w-[15px] h-[15px] flex justify-center items-center mt-[3px] p-2.5">
                        <span
                          className="material-icons text-white"
                          style={{ fontSize: '14px' }}
                        >
                          restaurant
                        </span>
                      </div>
                      <div className="dummy text-gray-deep mt-1">
                        점심 시간 : {hospital.h_lun_s} ~ {hospital.h_lun_c}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button size="mid" className="m-0">
                      <Link
                        className="w-full"
                        to={`/map/reservationForm?id=${h_code}`}
                      >
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
