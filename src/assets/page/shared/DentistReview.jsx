import React from 'react';

function DentistReview() {
  return (
    <>
      <div className="myBg bg-light-02">
        <div className="wrap" style={{ backgroundColor: '#f4f8ff' }}>
          <div className="container">
            <div className="flex items-center gap-[5px] mb-5">
              <span className="material-icons">edit_calendar</span>
              <h4>고객님들의 실제 후기</h4>
            </div>
            <div className="list">
              <div className="review w-full px-[13px] py-3.5 bg-white rounded-[5px] shadow-lg border border-main-01">
                <div className="reviewTitle flex items-center justify-between mb-3">
                  <span>너무 친절하고 진료를 잘 봐주세요!</span>
                  <span class="material-icons">keyboard_arrow_right</span>
                </div>
                <div className="reviewContent dummy text-gray-deep truncate">
                  부모님과 함께 방문했는데 치료 과정 내내 친절하게 설명해주셔서 엄마께서 정말 편안하게 진료를
                  받으셨습니다. 돌아가시는 길에 “다음에도 여기 오자”라고 하실 만큼 만족하셨어요!
                </div>

                <div className="flex items-center gap-px text-point mb-2.5">
                  <span className="dummy">4.4</span>
                  {/* 반복문 돌려야됨 */}
                  <span className="dummy material-icons">star_outline</span>
                  <span className="dummy material-icons">star_outline</span>
                  <span className="dummy material-icons">star_outline</span>
                  <span className="dummy material-icons">star_outline</span>
                  <span className="dummy material-icons">star_outline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DentistReview;
