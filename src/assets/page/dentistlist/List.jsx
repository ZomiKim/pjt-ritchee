import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import DentCard from './DentCard';
import PageNatation from '../../../componetns/PageNatation';
import axios from 'axios';

const List = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [hospital, setHospital] = useState([]);
  const [page, setPage] = useState(0);
  const sortType = searchParams.get('sort') || 'rating'; // 기본값은 별점 순

  const iValue = {
    para1: inputValue.split(' ')[0],
    para2: inputValue.split(' ')[1] ?? '',
  };

  const fetch = async () => {
    // sort 파라미터에 따라 다른 API 엔드포인트 사용
    let apiEndpoint = 'hs_evalpt'; // 기본값: 별점 순
    if (sortType === 'review') {
      apiEndpoint = 'hs_review'; // 리뷰 많은 순
    } else if (sortType === 'comment') {
      apiEndpoint = 'hs_commentcnt'; // 댓글 많은 순
    }

    const { data, error } = await axios.get(`http://localhost:8080/api/${apiEndpoint}?page=${page}&size=10`);

    if (error) {
      console.error('Hospital Info Fetch Error', error.message);
      return;
    }
    setHospital(data.content);
  };

  const searchFetch = async () => {
    if (inputValue.trim() === '') {
      alert('검색어를 입력하세요.');
      fetch();
      // http://localhost:5173/dentistList로 이동
    } else {
      const { data, error } = await axios.get(`http://localhost:8080/api/hs_find_para?page=${page}&size=10`, {
        // &para1=튼튼&para2=개봉
        params: {
          para1: iValue.para1,
          para2: iValue.para2,
        },
      });

      if (error) {
        console.error(error.message);
        return;
      } else {
        setHospital(data.content);
      }
    }
  };

  const EnterHandler = (e) => {
    if (e.key == 'Enter') {
      searchFetch();
      const sortParam = sortType !== 'rating' ? `&sort=${sortType}` : '';
      nav(
        `${
          inputValue.trim() == ''
            ? `/dentistList${sortParam ? `?sort=${sortType}` : ''}`
            : `/dentistList?para1=${iValue.para1}${iValue.para2 ? `&para2=${iValue.para2}` : ''}${sortParam}`
        }`
      );
    }
  };

  useEffect(() => {
    fetch();
    window.scrollTo({ top: 0 });
  }, [page, sortType]);

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
              <div className="list">
                <div className="search rounded-[20px] bg-white border border-main-01  mb-5 py-2 px-4 relative flex flex-col justify-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="검색어를 입력하세요"
                    className="searchInput outline-none placeholder-gray-mid"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={EnterHandler}
                  />
                  <Link
                    className="searchBtn bg-main-02 w-5 h-5 p-3 rounded-full flex justify-center items-center absolute right-3.5 xl:cursor-pointer"
                    onClick={searchFetch}
                    to={
                      inputValue.trim() == ''
                        ? `/dentistList${sortType !== 'rating' ? `?sort=${sortType}` : ''}`
                        : `/dentistList?para1=${iValue.para1}${iValue.para2 ? `&para2=${iValue.para2}` : ''}${sortType !== 'rating' ? `&sort=${sortType}` : ''}`
                    }
                  >
                    <span className="material-icons text-white" style={{ fontSize: '17px' }}>
                      search
                    </span>
                  </Link>
                </div>
                <ul
                  className={`py-6 flex flex-col md:flex-row md:flex-wrap ${
                    hospital.length < 4 ? 'md:gap-20' : 'md:justify-between'
                  } gap-4`}
                >
                  {hospital &&
                    hospital.map((h, i) => {
                      return (
                        <li
                          key={i}
                          className={`tab_cont text-center text-deep p-6 bg-white rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] w-full md:w-[48%] lg:w-[30%] ${
                            i === 9 ? 'md:hidden' : ''
                          }`}
                        >
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
          <PageNatation pageFn={setPage} />
        </div>
      </div>
    </>
  );
};

export default List;
