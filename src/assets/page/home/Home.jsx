import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // 첫 방문만 로딩화면이 뜹니다. 화면을 종료시킨 후 재방문 시에는 다시 로딩창이 뜹니다.
  // 페이지 이동 후 홈화면으로 들어갈때는 로딩창 안뜹니다. 참고해주세욤
  // sessionStorage에서 첫 방문 여부 확인
  const [firstVisit, setFirstVisit] = useState(() => {
    return sessionStorage.getItem("homeVisited") !== "true";
  });

  const [loading, setLoading] = useState(firstVisit);

  useEffect(() => {
    if (firstVisit) {
      const timer = setTimeout(() => {
        // 첫번째 방문 기록
        sessionStorage.setItem("homeVisited", "true");
        setLoading(false);
        setFirstVisit(false);

        // 3초 뒤  회원가입 페이지 이동
        navigate("/member", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [firstVisit, navigate]);

  // 이게 로딩 때 뜨는 로딩창
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-main-01 myBg">
        <div>
          <img
            src="https://ocnuykfvdtebmondqppu.supabase.co/storage/v1/object/public/images/logo_wh.png"
            alt="logo"
            className="w-32 mb-6"
          />
        </div>
        <div className="w-16 h-16 border-4 border-gray-100 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // 첫 방문이 아니거나 로딩 끝난 상태 ( 홈 화면은 여기에 작성 하면 될겁니다. 이건 로딩안뜨고 난후 일반 홈 화면)
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl">Home 화면</div>
      </div>
    </div>
  );
}

export default Home;
