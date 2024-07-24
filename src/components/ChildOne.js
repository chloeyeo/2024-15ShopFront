import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, up } from "../slice/counterSlice";

const ChildOne = () => {
  const counter = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();
  return (
    <div>
      ChildOne counter: {counter}
      <br />
      <button
        onClick={() => {
          dispatch(up(100));
        }}
      >
        Click Up
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(down(10));
        }}
      >
        Click Down
      </button>
    </div>
  );
};

export default ChildOne;
