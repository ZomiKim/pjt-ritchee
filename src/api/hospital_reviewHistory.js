// 사용자 리뷰 리스트
import axios from 'axios';
import { BASE_URL } from './config';

/**
 * 로그인한 사용자의 리뷰 전체 목록 조회
 */
export const getReviewList = async (userId) => {
  if (!userId) {
    throw new Error('userId가 없습니다');
  }

  const res = await axios.get(`${BASE_URL}/myreviewlist?userId=${userId}`);
  return res.data;
};
