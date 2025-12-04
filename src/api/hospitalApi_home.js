import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// 병원 평점순 목록 조회
export const getHospitalsByRating = async (page = 0, size = 6) => {
  const { data } = await axios.get(`${BASE_URL}/hs_evalpt`, {
    params: { page, size }
  });
  return data;
};

