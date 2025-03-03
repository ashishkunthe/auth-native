import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
