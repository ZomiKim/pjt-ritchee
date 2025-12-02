import React from 'react';

const Comment = () => {
  return (
    <div
      className="comment dummy border-b border-b-main-01 first:border-t first:border-t-main-01"
      style={{ padding: '14px 30px' }}
    >
      <div className="commentContent mb-5">
        이 후기 보고 저도 다녀왔는데 진짜 안아프게 잘 해주세요! 좋은 정보 넘넘
        감사합니다~!
      </div>
      <div className="commentEtc text-gray-deep flex justify-between">
        <div className="commentWriter">작성자 : 김훈규</div>
        <div className="commentCreatedAt">2025-02-11</div>
      </div>
    </div>
  );
};

export default Comment;
