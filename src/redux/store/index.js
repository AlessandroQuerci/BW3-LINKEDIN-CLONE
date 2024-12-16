import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../reducers/ProfileReducer";

const store = configureStore({
  reducer: {
    profile: ProfileReducer,
  },
});

export default store;
