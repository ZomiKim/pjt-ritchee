import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DentistView from '../shared/DentistView';
import Map from '../shared/Map';
import DentistReview from '../shared/DentistReview';
import DentCard from './DentCard';

function DentList() {
  return (
    <>
      <div className="wrap" style={{ backgroundColor: '#f4f8ff' }}>
        <div className="container">
          <h4 className="tit mb-5">
            <i className="fa-solid fa-tooth"></i>
            구로구 리뷰 치과 릿치!
          </h4>
          <div>
            <div className="list mb-[50px]">
              <div className="search rounded-[20px] bg-white border border-main-01 h-[35px] mb-5 py-2.5 px-3.5 relative flex flex-col justify-center">
                <input type="text" placeholder="검색어를 입력하세요" className="outline-none placeholder-gray-mid" />
                <div className="bg-main-02 w-5 h-5 rounded-full flex justify-center items-center absolute right-3.5">
                  <span className="material-icons text-white" style={{ fontSize: '12px' }}>
                    search
                  </span>
                </div>
              </div>
              <DentCard />
              <DentCard />
              <DentCard />
              <DentCard />
            </div>
            <div className="pagenation mt-2.5">페이지네이션 자리입니다.</div>
          </div>

          <Routes>
            <Route path="dentistView" element={<DentistView />} />
            <Route path="dentistView/dentistReview" element={<DentistReview />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default DentList;
