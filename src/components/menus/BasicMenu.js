import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BasicMenu = () => {
  const { email } = useSelector((state) => state.loginSlice);
  return (
    <div className="flex">
      <div className="w-4/5">
        <ul className="flex gap-1">
          <li>
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          {email ? (
            <li>
              <Link to="/product">PRODUCT</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="w-1/5">
        <ul>
          {email ? (
            <li>
              <Link to="/member/logout">LOGOUT</Link>
            </li>
          ) : (
            <Link to="/member/login">LOGIN</Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BasicMenu;
