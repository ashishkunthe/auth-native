import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logIn: (state, action) => {
      if (
        state.email === action.payload.email &&
        state.password === action.payload.password
      ) {
        state.isAuthenticated = true;
      }
    },
    logOut: (state) => {
      state.email = null;
      state.password = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
