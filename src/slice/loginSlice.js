import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { setCookie } from "../util/cookieUtil";

const initialState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state, actions) => {
      console.log("login...");
      console.log("actions.payload:", actions.payload);
      return { email: actions.payload.email };
    },
    logout: () => {
      console.log("logout...");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log("action.payload when fulfilled:", action.payload);
        if (!action.payload.error)
          setCookie("member", JSON.stringify(action.payload));
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("rejected");
      });
  },
});

export default loginSlice.reducer;

export const { login, logout } = loginSlice.actions;
