import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slice/loginSlice";

const LogoutComponent = () => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="h-screen  flex items-center">
      <div className="container mx-auto bg-sb-400">
        <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Welcome to Startup</h3>
            <p className="text-gray-600 pt-2">Log out of your account.</p>
          </div>
          <button
            className="bg-purple-600 mt-5 px-10 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            // type="submit"
            onClick={handleClickLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;
