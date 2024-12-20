import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../reducers/ProfileReducer";
import UpdateProfileReducer from "../reducers/UpdateProfileReducer";

const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    updateProfile: UpdateProfileReducer,
  },
});

export default store;
