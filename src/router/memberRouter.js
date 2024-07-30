import Loading from "../loading/Loading";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("../layouts/pages/member/LoginPage"));
const Logout = lazy(() => import("../layouts/pages/member/LogoutPage"));
const KakaoRedirect = lazy(() =>
  import("../layouts/pages/member/KakaoRedirectPage")
);

const memberRouter = () => {
  return [
    {
      path: "login",
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "logout",
      element: (
        <Suspense fallback={Loading}>
          <Logout />
        </Suspense>
      ),
    },
    {
      path: "kakao",
      element: (
        <Suspense fallback={Loading}>
          <KakaoRedirect />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
