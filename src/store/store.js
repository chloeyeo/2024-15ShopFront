import { configureStore } from "@reduxjs/toolkit";
import counterStore from "../slice/counterSlice";
import loginSlice from "../slice/loginSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterStore.reducer,
//   }, // slice we made gets inserted into reducer
//   // we're using redux 'toolkit' so instead of combineReducer we use slice (made from createSlice())
// });

const store = configureStore({ reducer: { loginSlice } });

export default store;
