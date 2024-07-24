import React from "react";
import BasicLayout from "../../BasicLayout";
import { Link, Outlet } from "react-router-dom";

const ProductPage = () => {
  return (
    <BasicLayout>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default ProductPage;
