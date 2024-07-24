import axios from "axios";
const host = `${process.env.REACT_APP_API_SERVER_HOST}/api/member/login`; // for login

export const loginPost = async (loginParam) => {
  try {
    // don't need token here because it's where we receive token. (productList and productView need token - we need to put token to header as authentication bearer, but login does not require a token!)
    const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
    const form = new FormData();
    form.append("username", loginParam.email);
    form.append("password", loginParam.pw);
    const res = await axios.post(host, form, header);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
