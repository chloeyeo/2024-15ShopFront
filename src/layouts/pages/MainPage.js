import React from "react";
import BasicLayout from "../BasicLayout";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    // <div>
    //   MainPage
    //   <Link to="/about">about</Link>
    // </div>
    <BasicLayout>
      <div className="bg-red-100">Main Page</div>
    </BasicLayout>
  );
};

export default MainPage;
