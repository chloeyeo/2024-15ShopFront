import Loading from "../loading/Loading";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("../layouts/pages/member/LoginPage"));
const Logout = lazy(() => import("../layouts/pages/member/LogoutPage"));

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
  ];
};

export default memberRouter;
