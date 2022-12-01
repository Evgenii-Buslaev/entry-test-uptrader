import { CREATE, READ, UPDATE, DELETE } from "../actions/actions";

const initalState = () => {
  if (localStorage.getItem("projects")) {
    return JSON.parse(localStorage.getItem("projects"));
  } else {
    return {
      projects: [],
    };
  }
};

export const projectReducer = (state = initalState(), action) => {
  switch (action.type) {
    case READ:
      localStorage.setItem("projects", JSON.stringify(state));
      return state;
    case CREATE:
      const createState = {
        ...state,
        projects: [...state.projects, action.data],
      };
      localStorage.setItem("projects", JSON.stringify(createState));
      return createState;
    case DELETE:
      const deleteState = {
        ...state,
        projects: state.projects.filter((elem) => elem.id !== action.data.id),
      };
      localStorage.setItem("projects", JSON.stringify(deleteState));
      return deleteState;
    case UPDATE:
      const updateState = {
        ...state,
        projects: [
          ...state.projects.filter((elem) => elem.id !== action.data.id),
          action.data,
        ],
      };
      localStorage.setItem("projects", JSON.stringify(updateState));
      return updateState;
    default:
      return state;
  }
};
