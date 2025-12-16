import React, { useEffect, useState } from 'react';
import PageNatation from '../../../componetns/PageNatation';
import { useUser } from '../../../context/UserContext';
import { getReviewList } from '../../../api/hospital_reviewHistory';

function ReviewHistory() {
  const { user } = useUser();
  const userId = user?.id;

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!userId) return;

      try {
        setLoading(true);
        const data = await getReviewList(userId);
        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('리뷰 불러오기 실패:', error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  return (
    <>
      <div className="min-h-screen mx-auto bg-light-02 myBg px-10 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
        <h4 className="tit my-1 mt-10 mb-5 lg:py-4 lg:text-lg ml-[1vw]">
          <span className="material-icons">edit_calendar</span>
          {user?.name || '회원'} 님의 작성 후기
        </h4>

        <div className="w-full mx-auto">
          <section
            className={`w-full flex flex-row flex-wrap gap-2 lg:gap-4 mx-auto
    ${reviews.length < 4 ? 'md:gap-20' : 'md:justify-between'}`}
          >
            {loading ? (
              <p className="w-full text-center text-gray-500">로딩중...</p>
            ) : reviews.length === 0 ? (
              <p className="w-full text-center text-gray-500">작성한 후기가 없습니다.</p>
            ) : (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-1.067rem)] border border-gray-200 shadow-lg p-5 rounded-lg mb-5 bg-white"
                >
                  <p className="tit mt-auto mb-3">{review.r_title}</p>

                  {/* 별점 */}
                  <div className="flex flex-row mb-3 text-point items-center">
                    {Array.from({ length: review.r_eval_pt }).map((_, i) => (
                      <span key={i} className="material-icons !text-[clamp(14px,10vw,40px)]">
                        star
                      </span>
                    ))}
                  </div>

                  <ul className="pl-1 space-y-1 mt-3 text-gray-deep">
                    <li>· 병원명 : {review.h_name}</li>
                    <li>· 작성일 : {review.createdAt?.substring(0, 10)}</li>
                    <li className="text-black">{review.r_content}</li>
                  </ul>
                </div>
              ))
            )}
          </section>
        </div>
        <PageNatation />
      </div>
    </>
  );
}

export default ReviewHistory;
