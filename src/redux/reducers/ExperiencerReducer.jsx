import { SET_COMPANY, SET_DESCRIPTION, SET_STARTDATE, SET_ROLE, SET_ENDDATE, SET_EXPERIENCE_AREA, SET_EXPERIENCE_IMAGE } from "../actions/index";

const InitialState = {
  user: [
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "", // può essere null
      description: "",
      area: "",
      username: "", // SERVER GENERATED
      image: "", // SERVER GENERATED, modificabile
      createdAt: "", // SERVER GENERATED
      updatedAt: "", // SERVER GENERATED
      __v: 0, // SERVER GENERATED
      _id: "", // SERVER GENERATED
    },
  ],
};

const ExperienceReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        user: {
          ...state.user,
          role: action.newValue,
        },
      };
    case SET_COMPANY:
      return {
        ...state,
        user: {
          ...state.user,
          company: action.newValue,
        },
      };
    case SET_STARTDATE:
      return {
        ...state,
        user: {
          ...state.user,
          startDate: action.newValue,
        },
      };
    case SET_ENDDATE:
      return {
        ...state,
        user: {
          ...state.user,
          endDate: action.newValue,
        },
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        user: {
          ...state.user,
          description: action.newValue,
        },
      };
    case SET_EXPERIENCE_AREA:
      return {
        ...state,
        user: {
          ...state.user,
          area: action.newValue,
        },
      };

    default:
      return state;
  }
};

export default ExperienceReducer;
