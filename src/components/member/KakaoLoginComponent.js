import React from "react";
import { getKakaoLoginLink } from "../../api/kakaoApi";
import { Link } from "react-router-dom";

const KakaoLoginComponent = () => {
  const link = getKakaoLoginLink();
  return (
    <div className="mt-5">
      <div className="text-center text-blue-500 mb-5">
        로그인시에 자동가입처리
      </div>
      <div className="text-center bg-yellow-500 py-5 rounded text-white font-bold">
        <Link to={link}>KAKAO LOGIN</Link>
      </div>
    </div>
  );
};

export default KakaoLoginComponent;
