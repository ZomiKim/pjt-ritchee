import React from 'react';
import PageNatation from './../../../componetns/PageNatation';
import { Link, useLocation } from 'react-router-dom';

function DentistReview() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const h_code = query.get('id');
  return (
    <>
      <div className="myBg bg-light-02">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff', marginTop: '30px' }}>
          <div className="container">
            <div className="flex items-center gap-[5px] mb-5">
              <span className="material-icons">edit_calendar</span>
              <h4>고객님들의 실제 후기</h4>
            </div>
            <div className="list mb-7.5">
              {/* api 완성 후 h_code를 통해 r_id를 가져올 예정 */}
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              {/* ======================================================================= */}
              <Link to={`/dentistList/dentistView/dentistReview?id=${h_code}`}>
                <div
                  className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01 mb-2.5"
                  style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}
                >
                  <div className="reviewTitle flex items-center justify-between mb-3">
                    <span>너무 친절하고 진료를 잘 봐주세요!</span>
                    <span className="material-icons">keyboard_arrow_right</span>
                  </div>
                  <div className="reviewContent dummy text-gray-deep truncate mb-2.5">
                    부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                    받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
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
                    <div className="dummy text-gray-mid">조회수 : 854</div>
                  </div>
                </div>
              </Link>
              <PageNatation></PageNatation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DentistReview;
