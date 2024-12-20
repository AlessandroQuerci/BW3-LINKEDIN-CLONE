import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../reducers/ProfileReducer";
import UpdateProfileReducer from "../reducers/UpdateProfileReducer";
import ExperienceReducer from "../reducers/ExperiencerReducer";

const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    updateProfile: UpdateProfileReducer,
    experience: ExperienceReducer,
  },
});

export default store;
