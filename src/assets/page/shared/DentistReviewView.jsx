import React, { useEffect, useState } from 'react';
import Button from './../../../componetns/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

const DentistReviewView = () => {
  const { user } = useUser();
  const [like, setLike] = useState(false);
  const [review, setReview] = useState({});
  const [comment, setComment] = useState({
    commentCount: 0,
    comments: [],
  });
  const [formData, setFormData] = useState(''); // 댓글 입력 track state

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const reviewId = query.get('reviewId'); // requestParam에 있는 값 가져오기

  const reviewFetch = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/myreviewlist/${reviewId}`
    );
    setReview(data[0]);
  };

  const commentFetch = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/comment?reviewId=${reviewId}`
    );
    setComment({
      commentCount: data.commentCount,
      comments: data.comments,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.trim() == '') {
      alert('댓글을 작성해 주세요.');
      return;
    }
    const { error } = await axios.post('http://localhost:8080/api/comment', {
      reviewId: +reviewId,
      c_content: formData,
      userId: user?.id,
    });

    if (error) {
      console.error('에러 발생!!', error.message);
      return;
    }

    setFormData('');
    alert('댓글이 작성되었습니다.');
    await commentFetch();
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
            <h4>{review?.r_title ?? '의사 선생님이 친절한 곳!!'}</h4>
          </div>
          <div className="imgWithReviewEval mb-5">
            <img
              src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/TESTIMG.png"
              alt=""
              className="mb-[11px] "
            />
            {/*  별 개수 계산 및 조회수  */}
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
              <div className="dummy text-black">
                조회수 : {review?.r_views ?? '854'}
              </div>
            </div>
          </div>
          <div className="dummy">{review?.r_content ?? '리뷰가 없습니다.'}</div>
          <div className="count flex gap-2 justify-end mt-7">
            <div className="like flex gap-2 items-center">
              <span
                className="material-icons cursor-pointer text-point-hov"
                onClick={() => setLike((prev) => !prev)}
              >
                {like ? 'favorite_border' : 'favorite'}
              </span>
              <span className="dummy">{review?.likeCount ?? '111'}</span>
            </div>
            <div className="comment flex gap-2 items-center">
              <span className="material-icons">chat_bubble_outline</span>
              <span className="dummy">{comment?.commentCount ?? '111'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 */}
      <ul className="comments">
        {comment?.comments?.map((c, i) => (
          <li
            className={`myBg bg-light-02 md:px-6 xl:px-10 border border-x-0 ${
              i == 0 ? 'border-y-main-01' : 'border-b-main-01 border-t-0'
            }`}
            key={i}
          >
            <div className="comment dummy px-[30px] py-3.5 ">
              <div className="commentContent mb-5">
                {c.c_content ?? '댓글 없음'}
              </div>
              <div className="commentEtc text-gray-deep flex justify-between">
                <div className="commentWriter">작성자 : 김훈규</div>
                <div className="commentCreatedAt">2025-02-11</div>
              </div>
            </div>
          </li>
        ))}

        {/* 댓글 작성 */}
        <li className="myBg bg-light-02 md:px-6 xl:px-10 border border-b-main-01 border-t-0 border-x-0">
          <form
            className="comment dummy px-[30px] py-3.5"
            onSubmit={submitHandler}
          >
            <textarea
              id="comment"
              name="comment"
              rows="4"
              placeholder="댓글을 작성해 주세요"
              className="outline-none placeholder-gray-mid rounded-sm text-[12px] bg-white w-full py-2.5 pl-3 pr-2 border border-main-01 focus:border-main-02"
              onChange={(e) => setFormData(e.target.value)}
              value={formData}
              style={{ resize: 'none' }}
            ></textarea>
            <Button className={'mt-5 mb-2.5 cursor-pointer'}>댓글 작성</Button>
          </form>
        </li>
      </ul>
    </>
  );
};

export default DentistReviewView;
