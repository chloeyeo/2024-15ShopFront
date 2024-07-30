import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getAccessToken,
  getMemberWithAccessToken,
} from "../../../api/kakaoApi";

const KakaoRedirectPage = () => {
  const [searchParam] = useSearchParams();
  const authCode = searchParam.get("code");
  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log("accessToken:", accessToken);
      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log("memberInfo:", memberInfo);
      });
    });
  }, [authCode]);
  return (
    <div>
      <div>KakaoRedirectPage</div>
      <div>{authCode}</div>
    </div>
  );
};

export default KakaoRedirectPage;
