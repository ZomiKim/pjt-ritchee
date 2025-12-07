import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DentCard from './DentCard';
import PageNatation from '../../../componetns/PageNatation';
import axios from 'axios';

const List = () => {
  const [inputValue, setInputValue] = useState('');
  const [hospital, setHospital] = useState([]);

  const iValue = {
    para1: inputValue.split(' ')[0],
    para2: inputValue.split(' ')[1] ?? '',
  };

  const fetch = async () => {
    const { data, error } = await axios.get(
      `http://localhost:8080/api/hs_evalpt?page=0&size=10`
    );

    if (error) {
      console.error(
        'Hospital order by avgEvaluationPoint Info Fetch Error',
        error.message
      );
      return;
    }
    // console.log(data.content);
    setHospital(data.content);
  };

  const searchFetch = async () => {
    if (inputValue.trim() === '') {
      alert('검색어를 입력하세요.');
      fetch();
      // http://localhost:5173/dentistList로 이동
    } else {
      const { data, error } = await axios.get(
        'http://localhost:8080/api/hs_find_para?page=0&size=10',
        {
          // &para1=튼튼&para2=개봉
          params: {
            para1: iValue.para1,
            para2: iValue.para2,
          },
        }
      );

      if (error) console.error(error.message);
      else {
        setHospital(data.content);
      }
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="myBg bg-light-02">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff' }}>
          <div
            className="container"
            style={{ paddingLeft: '5px', paddingRight: '5px' }}
          >
            <h4 className="tit mb-5">
              <i className="fa-solid fa-tooth"></i>
              구로구 리뷰 치과 릿치!
            </h4>
            <div>
              <div className="list">
                <div className="search rounded-[20px] bg-white border border-main-01  mb-5 py-2 px-4 relative flex flex-col justify-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="검색어를 입력하세요"
                    className="searchInput outline-none placeholder-gray-mid"
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Link
                    className="searchBtn bg-main-02 w-5 h-5 p-3 rounded-full flex justify-center items-center absolute right-3.5 xl:cursor-pointer"
                    onClick={searchFetch}
                    to={
                      inputValue.trim() == ''
                        ? '/dentistList'
                        : `/dentistList?para1=${iValue.para1}&para2=${iValue.para2}`
                    }
                  >
                    <span
                      className="material-icons text-white"
                      style={{ fontSize: '17px' }}
                    >
                      search
                    </span>
                  </Link>
                </div>
                <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-4">
                  {hospital.map((h, i) => {
                    return (
                      <li key={i} className="w-full md:w-[48%] xl:w-[32%]">
                        <Link to={`/dentistList/dentistView?id=${h.h_code}`}>
                          <DentCard hospital={h} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* pagenation에 py-16 걸려있어서 mb-50 - 16 */}
        <div className="mb-[34px]">
          <PageNatation />
        </div>
      </div>
    </>
  );
};

export default List;
