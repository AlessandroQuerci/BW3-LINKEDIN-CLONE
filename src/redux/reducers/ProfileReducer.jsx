import {
  SET_AREA,
  SET_BIO,
  SET_EMAIL,
  SET_ID,
  SET_IMAGE,
  SET_NAME,
  SET_SURNAME,
  SET_TITLE,
  SET_USERNAME,
  UPDATE_AREA,
  UPDATE_BIO,
  UPDATE_EMAIL,
  UPDATE_ID,
  UPDATE_IMAGE,
  UPDATE_NAME,
  UPDATE_SURNAME,
  UPDATE_TITLE,
  UPDATE_USERNAME,
} from "../actions/index";

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

const ProfileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.newName,
        },
      };
    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.newUsername,
        },
      };
    case SET_SURNAME:
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.newSurname,
        },
      };
    case SET_TITLE:
      return {
        ...state,
        user: {
          ...state.user,
          title: action.newTitle,
        },
      };
    case SET_BIO:
      return {
        ...state,
        user: {
          ...state.user,
          bio: action.newBio,
        },
      };
    case SET_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.newEmail,
        },
      };
    case SET_AREA:
      return {
        ...state,
        user: {
          ...state.user,
          area: action.newArea,
        },
      };
    case SET_ID:
      return {
        ...state,
        user: {
          ...state.user,
          _id: action.newId,
        },
      };
    case SET_IMAGE:
      return {
        ...state,
        user: {
          ...state.user,
          image: action.newImage,
        },
      };

    default:
      return state;
  }
};

export default ProfileReducer;
