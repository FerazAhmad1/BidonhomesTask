import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin:
    localStorage.getItem("email") && localStorage.getItem("name")
      ? true
      : false,
  userEmail: localStorage.getItem("email") || "",
  userName: localStorage.getItem("name") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginMethod: (state, action) => {
      console.log("hello");
      state.userName = action.payload.userName;
      state.isLoggedin = !!state.userName;
      state.userEmail = action.payload.email;
      console.log(state.isLoggedin, state.userEmail);
    },
  },
});
export default authSlice.reducer;
export const { loginMethod } = authSlice.actions;
