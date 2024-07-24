import React from "react";
import { Router, RouterProvider } from "react-router-dom";
import root from "./router/router";

const App = () => {
  return <RouterProvider router={root} />;
};

export default App;

// import React from "react";
// import ChildOne from "./components/ChildOne";

// const App = () => {
//   return (
//     <div>
//       <ChildOne />
//     </div>
//   );
// };

// export default App;
