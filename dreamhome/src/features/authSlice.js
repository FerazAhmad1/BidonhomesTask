import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userEmail: "",
  userName: "",
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
