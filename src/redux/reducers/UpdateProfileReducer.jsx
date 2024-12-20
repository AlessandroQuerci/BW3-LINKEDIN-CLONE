import { UPDATE_AREA, UPDATE_BIO, UPDATE_EMAIL, UPDATE_ID, UPDATE_IMAGE, UPDATE_NAME, UPDATE_SURNAME, UPDATE_TITLE, UPDATE_USERNAME } from "../actions/index";

const InitialState = {
  user: {
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    _id: "",
  },
};

const UpdateProfileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.newValue,
        },
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.newValue,
        },
      };
    case UPDATE_SURNAME:
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.newValue,
        },
      };
    case UPDATE_TITLE:
      return {
        ...state,
        user: {
          ...state.user,
          title: action.newValue,
        },
      };
    case UPDATE_BIO:
      return {
        ...state,
        user: {
          ...state.user,
          bio: action.newValue,
        },
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.newValue,
        },
      };
    case UPDATE_AREA:
      return {
        ...state,
        user: {
          ...state.user,
          area: action.newValue,
        },
      };
    case UPDATE_ID:
      return {
        ...state,
        user: {
          ...state.user,
          _id: action.newValue,
        },
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        user: {
          ...state.user,
          image: action.newValue,
        },
      };

    default:
      return state;
  }
};

export default UpdateProfileReducer;
