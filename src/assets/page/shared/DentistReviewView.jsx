import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import Button from './../../../componetns/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const DentistReviewView = () => {
  const [like, setLike] = useState(false);
  const [review, setReview] = useState({});
  const [comment, setComment] = useState([]);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const reviewId = query.get('reviewId');

  const reviewFetch = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/myreviewlist/${reviewId}`);
    setReview(data[0]);
    console.log(data[0]);
  };

  const commentFetch = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/comment?reviewId=${reviewId}`);
    console.log(data);
    setComment(data);
  };

  useEffect(() => {
    reviewFetch();
    commentFetch();
  }, [reviewId]);

  return (
    <>
      {/* 리뷰 */}
      <div className="wrap">
        <div className="review mb-5">
          <div className="flex items-center gap-[5px] mb-5">
            <span className="material-icons">edit_calendar</span>
            <h4>{review?.r_title ?? '의사 선생님이 친절한 곳!!'}</h4> {/* r_title 들어갈 곳*/}
          </div>
          <div className="imgWithReviewEval mb-5">
            <img
              src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
              alt=""
              className="mb-[11px] "
            />
            <div className="reviewEvaluation flex justify-between">
              <div className="stars flex flex-row text-point items-center">
                <span className="mr-1">{review?.r_eval_pt ?? '4.4'}</span>
                <div className="flex flex-row text-point items-center">
                  {Array.from({ length: 5 }).map((_, i) => {
                    if (review?.r_eval_pt >= i + 1)
                      return (
                        <span key={i} className="material-icons">
                          star
                        </span>
                      );
                    if (review?.r_eval_pt > i && review?.r_eval_pt < i + 1)
                      return (
                        <span key={i} className="material-icons">
                          star_half
                        </span>
                      );
                    return (
                      <span key={i} className="material-icons">
                        star_outline
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="dummy text-black">조회수 : {review?.r_views ?? '854'}</div>
            </div>
          </div>
          <div className="dummy">{review?.r_content ?? '리뷰가 없습니다.'}</div>
          <div className="count flex gap-2 justify-end mt-7">
            <div className="like flex gap-2 items-center">
              <span className="material-icons cursor-pointer text-point-hov" onClick={() => setLike((prev) => !prev)}>
                {like ? 'favorite_border' : 'favorite'}
              </span>
              <span className="dummy">{review?.likeCount ?? '111'}</span>
            </div>
            <div className="comment flex gap-2 items-center text-gray-deep">
              <span className="material-icons">chat_bubble_outline</span>
              <span className="dummy">{review?.commentCount ?? '111'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 */}
      <ul className="comments">
        <li className="myBg bg-light-02 md:px-6 xl:px-10 border border-y-main-01 border-x-0">
          <div className="comment dummy px-[30px] py-3.5 ">
            <div className="commentContent mb-5">
              이 후기 보고 저도 다녀왔는데 진짜 안아프게 잘 해주세요! 좋은 정보 넘넘 감사합니다~!
            </div>
            <div className="commentEtc text-gray-deep flex justify-between">
              <div className="commentWriter">작성자 : 김훈규</div>
              <div className="commentCreatedAt">2025-02-11</div>
            </div>
          </div>
        </li>

        <li className="myBg bg-light-02 md:px-6 xl:px-10 border border-b-main-01 border-t-0 border-x-0">
          <div className="comment dummy px-[30px] py-3.5 ">
            <div className="commentContent mb-5">너무 상세히 적어준 좋은 후기 감사합니다~~~</div>
            <div className="commentEtc text-gray-deep flex justify-between">
              <div className="commentWriter">작성자 : 홍지승</div>
              <div className="commentCreatedAt">2025-02-11</div>
            </div>
          </div>
        </li>
        <li className="myBg bg-light-02 md:px-6 xl:px-10 border border-b-main-01 border-t-0 border-x-0">
          <div className="comment dummy px-[30px] py-3.5 ">
            <div className="commentContent mb-5">덕분에 좋은 정보 얻었습니다</div>
            <div className="commentEtc text-gray-deep flex justify-between">
              <div className="commentWriter">작성자 : 임윤섭</div>
              <div className="commentCreatedAt">2025-02-11</div>
            </div>
          </div>
        </li>

        {/* 댓글 작성 */}
        <li className="myBg bg-light-02 md:px-6 xl:px-10 border border-b-main-01 border-t-0 border-x-0">
          <div className="comment dummy px-[30px] py-3.5 ">
            <textarea
              id="comment"
              name="comment"
              rows="4"
              placeholder="댓글을 작성해 주세요"
              className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 border border-main-01 focus:border-main-02"
              style={{ resize: 'none' }}
            ></textarea>
            <Button className={'mt-5 mb-2.5 cursor-pointer'}>댓글 작성</Button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default DentistReviewView;
