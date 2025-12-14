import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function ProtectedRoute({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!user && !hasAlerted.current) {
      hasAlerted.current = true;
      alert("로그인이 필요합니다.");
      navigate("/member/signin");
    }
  }, [user, navigate]);

  // 로그인하지 않은 경우 아무것도 렌더링하지 않음 (리다이렉트 중)
  if (!user) {
    return null;
  }

  // 로그인한 경우 children 렌더링
  return children;
}

export default ProtectedRoute;
