import axios from "axios";

const host = process.env.REACT_APP_API_SERVER_HOST;

const rest_api_key = "78506c1bd0985343833cdcf21b8d7517";
const redirect_uri = "http://localhost:3000/member/kakao";
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";
const access_token_url = "https://kauth.kakao.com/oauth/token";
const client_secret = "50iSTBEdsgnBooElRK2YKdmFPTJgaJPv";

export const getKakaoLoginLink = () => {
  const kakaoUrl = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoUrl;
};

export const getAccessToken = async (authCode) => {
  const header = {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri,
    code: authCode,
    client_secret,
  };
  const res = await axios.post(access_token_url, params, header);
  console.log("res", res);
  const accessToken = res.data.access_token;
  console.log("accessToken:", accessToken);
  return accessToken;
};

export const getMemberWithAccessToken = async (accessToken) => {
  const res = await axios.get(
    `${host}/api/member/kakao?accessToken=${accessToken}`
  );
  return res.data;
};
