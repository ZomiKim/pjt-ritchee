import React, { useEffect, useState } from 'react';
import PageNatation from './../../../componetns/PageNatation';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function DentistReview() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('id');
  const [review, setReview] = useState([]);

  const fetch = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/rs_review?h_code=${h_code}`);
    console.log(data.content);
    setReview(data.content);
  };

  useEffect(() => {
    fetch();
  }, [h_code]);

  return (
    <>
      <div className="myBg bg-light-02">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff', marginTop: '30px' }}>
          <div className="container">
            <div className="flex items-center gap-[5px] mb-5">
              <span className="material-icons">edit_calendar</span>
              <h4>고객님들의 실제 후기</h4>
            </div>

            <ul className="list flex flex-col xl:flex-row xl:flex-wrap xl:gap-4">
              {review?.map((r, i) => {
                return (
                  <li key={i} className="w-full xl:w-[32%]">
                    <Link to={`/dentistList/dentistView/dentistReview?reviewId=${r.r_id}`}>
                      <div
                        className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                        style={{
                          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                        }}
                      >
                        <div className="reviewTitle flex items-center justify-between mb-3">
                          <span>{r.r_title ?? '리뷰 제목'}</span>
                          <span className="material-icons">keyboard_arrow_right</span>
                        </div>
                        <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                          {r.r_content ?? '리뷰 내용'}
                        </div>
                        <div className="reviewEvaluation flex justify-between">
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
                          <div className="dummy text-gray-mid">조회수 : {r.r_views ?? '0'}건</div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* pagenation에 py-16 걸려있어서 mb-50 - 16 */}
        <div className="mb-[34px]">
          <PageNatation></PageNatation>
        </div>
      </div>
    </>
  );
}

export default DentistReview;
