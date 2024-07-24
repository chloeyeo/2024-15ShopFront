import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";

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
      .addCase(loginPostAsync.fulfilled, () => {
        console.log("fulfilled");
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
