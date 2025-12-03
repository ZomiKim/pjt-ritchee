import React from 'react';
import { useDent } from '../../../context/DentContext';
import { Link } from 'react-router-dom';
import DentCard from './DentCard';
import PageNatation from '../../../componetns/PageNatation';

const List = () => {
  const { hospital } = useDent();
  return (
    <>
      <div className="myBg bg-light-02">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff' }}>
          <div className="container" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <h4 className="tit mb-5">
              <i className="fa-solid fa-tooth"></i>
              구로구 리뷰 치과 릿치!
            </h4>
            <div>
              <div className="list mb-[50px]">
                <div className="search rounded-[20px] bg-white border border-main-01  mb-5 py-2 px-4 relative flex flex-col justify-center">
                  <input type="text" placeholder="검색어를 입력하세요" className="outline-none placeholder-gray-mid" />
                  <div className="bg-main-02 w-5 h-5 p-3 rounded-full flex justify-center items-center absolute right-3.5">
                    <span className="material-icons text-white" style={{ fontSize: '17px' }}>
                      search
                    </span>
                  </div>
                </div>
                <ul>
                  {hospital.map((h, i) => {
                    return (
                      <Link key={i} to={`/dentistList/dentistView?id=${h.h_code}`}>
                        <DentCard child={h} />
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <PageNatation></PageNatation>
      </div>
    </>
  );
};

export default List;
