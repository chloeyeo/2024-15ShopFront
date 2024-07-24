import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="container mx-auto bg-amber-200">
          <BasicMenu />
        </div>
      </div>
      {/* tailwind 'container' doesn't automatically centers/ make things go into middle
      so we have to additionally put mx-auto to put container in centre */}
      <div className="container mx-auto">
        visual
        <div>{children}</div>
      </div>
    </>
  );
};

export default BasicLayout;
