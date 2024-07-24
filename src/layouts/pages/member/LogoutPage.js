import React from "react";
import LogoutComponent from "../../../components/member/LogoutComponent";
import BasicMenu from "../../../components/menus/BasicMenu";

const LogoutPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <BasicMenu />
      </div>
      <LogoutComponent />
    </div>
  );
};

export default LogoutPage;
