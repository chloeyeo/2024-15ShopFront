import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState, // when reload page the loadMemberCookie still keeps the logged in state
  reducers: {
    login: (state, action) => {
      console.log("login...");
      console.log("actions.payload:", action.payload);

      // carry out the login functionality
      const payload = action.payload;
      setCookie("member", JSON.stringify(payload), 1);
      return payload;
      // return { email: action.payload.email };
    },
    logout: () => {
      console.log("logout...");
      removeCookie("member");
      return { ...initState };
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
