import React from 'react';
import Comment from './Comment';

const DentistReviewView = () => {
  return (
    <>
      <div className="wrap">
        <div className="review mb-[50px]">
          <div className="flex items-center gap-[5px] mb-5">
            <span className="material-icons">edit_calendar</span>
            <h4>의사 선생님이 친절한 곳!!</h4> {/* r_title 들어갈 곳*/}
          </div>
          <div className="imgWithReviewEval mb-5">
            <img
              src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
              alt=""
              className="mb-[11px] "
            />
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
              <div className="dummy text-black">조회수 : 854</div>
            </div>
          </div>
          <div className="dummy">
            사랑니 때문에 계속 불편했는데 드디어 발치를 결심하고 치과에 다녀왔습니다. 처음에는 정말 긴장됐지만, 상담부터
            너무 친절하게 안내해주셔서 마음이 많이 놓였습니다. <br />
            <br />
            의사 선생님께서 현재 상태를 자세하게 설명해주시고, 어떤 방식으로 발치가 진행되는지 차근차근 알려주셔서
            믿음이 갔습니다. 마취도 최대한 통증 없이 진행해주셔서 생각보다 훨씬 편안하게 시작할 수 있었어요.
            <br />
            <br />
            발치 과정도 정말 빠르고 깔끔하게 끝나서 ‘이게 끝인가?’ 싶을 정도였습니다. 특히 중간중간 불편한 점 없는지
            계속 체크해주셔서 더 안심이 됐습니다. 발치 직후에도 붓기나 통증 관리 방법을 친절하게 설명해주셔서 집으로
            돌아오는 길도 마음이 든든했습니다. <br />
            <br />
            하루 정도 지나니 통증도 심하지 않았고, 생각보다 회복이 빨라서 일상생활에 큰 지장이 없었습니다. 치과 직원분들
            모두 친절하시고 분위기도 편안해서 환자 배려가 느껴졌습니다. 무서워서 계속 미루고 있었는데, 이렇게 빨리 끝낼
            걸 그동안 왜 고민했나 싶어요. 사랑니 때문에 고민 중이신 분들께는 꼭 추천드리고 싶습니다. <br />
            <br />
            치과에 대한 두려움이 많았던 저도 만족스러운 경험이었으니 누구든 편하게 방문하셔도 될 것 같아요. 앞으로 정기
            검진도 여기서 받으려고 합니다.
          </div>
        </div>
      </div>
      <div className="comments myBg bg-light-02 mb-[50px]">
        {/* 기능 구현 시 map으로 <Comment />  예정*/}
        <div className="comment dummy border border-y-main-01" style={{ padding: '14px 30px' }}>
          <div className="commentContent mb-5">
            이 후기 보고 저도 다녀왔는데 진짜 안아프게 잘 해주세요! 좋은 정보 넘넘 감사합니다~!
          </div>
          <div className="commentEtc text-gray-deep flex justify-between">
            <div className="commentWriter">작성자 : 김훈규</div>
            <div className="commentCreatedAt">2025-02-11</div>
          </div>
        </div>
        <div className="comment dummy border-b border-b-main-01" style={{ padding: '14px 30px' }}>
          <div className="commentContent mb-5">너무 상세히 적어준 좋은 후기 감사합니다~~~</div>
          <div className="commentEtc text-gray-deep flex justify-between">
            <div className="commentWriter">작성자 : 홍지승</div>
            <div className="commentCreatedAt">2025-02-11</div>
          </div>
        </div>
        <div className="comment dummy border-b border-b-main-01" style={{ padding: '14px 30px' }}>
          <div className="commentContent mb-5">덕분에 좋은 정보 얻었습니다</div>
          <div className="commentEtc text-gray-deep flex justify-between">
            <div className="commentWriter">작성자 : 임윤섭</div>
            <div className="commentCreatedAt">2025-02-11</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DentistReviewView;
