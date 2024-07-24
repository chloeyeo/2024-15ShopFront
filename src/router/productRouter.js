import { lazy, Suspense } from "react";
import Loading from "../loading/Loading";
import { Navigate } from "react-router-dom";

const ProductList = lazy(() => import("../layouts/pages/product/ListPage"));
const ProductAdd = lazy(() => import("../layouts/pages/product/AddPage"));

// const Loading = () => {
//   //   console.log("Loading component rendered, santaClaus:", santaClaus); // Check the path in the console
//   return (
//     <div className="container mx-auto">
//       <div className="bg-blue-100 flex flex-col justify-center">
//         HII IT'S LOADING......
//         <img src="/136.gif" alt="loading...!" />
//         <img src="/santaClaus.gif" alt="loading..." />
//       </div>
//     </div>
//   );
// };

const productRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <ProductAdd />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate to="list" replace={true} />,
    },
  ];
};

export default productRouter;
