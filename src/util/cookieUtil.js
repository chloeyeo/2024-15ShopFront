import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, days = 1) => {
  // default days=1 (until cookie expires)
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days); // when you login you DON'T send access token in the header!
  return cookies.set(name, value, { expires, path: "/" }); // same as expires:expires,
};
export const getCookie = (name) => {
  return cookies.get(name);
};
export const removeCookie = (name, path = "/") => {
  // default path is "/"
  cookies.remove(name, { path }); // no return value. same as path:path,
};
