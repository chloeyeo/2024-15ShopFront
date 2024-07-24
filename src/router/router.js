import { createBrowserRouter } from "react-router-dom";
// import MainPage from "../layouts/pages/MainPage";
// import AboutPage from "../layouts/pages/AboutPage";
import { Suspense, lazy } from "react";
import BasicMenu from "../components/menus/BasicMenu";
import productRouter from "./productRouter";
import memberRouter from "./memberRouter";
import Loading from "../loading/Loading";
// same as () -> { return ... };
const MainPage = lazy(() => import("../layouts/pages/MainPage"));
const AboutPage = lazy(() => import("../layouts/pages/AboutPage"));
const ProductPage = lazy(() => import("../layouts/pages//product/ProductPage"));

const root = createBrowserRouter([
  {
    path: "",
    // element: <MainPage />,
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    // element: <AboutPage />,
    element: (
      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "product",
    // element: <AboutPage />,
    element: (
      <Suspense fallback={<Loading />}>
        <ProductPage />
      </Suspense>
    ),
    children: productRouter(),
  },
  {
    path: "member",
    children: memberRouter(),
  },
]);

export default root;
