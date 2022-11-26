import { CREATE, READ, UPDATE, DELETE } from "../actions/actions";

const initalState = {
  projects: [],
};

export const projectReducer = (state = initalState, action) => {
  switch (action.type) {
    case READ:
      return state;
    case CREATE:
      return { ...state, projects: [...state.projects, action.data] };
    case DELETE:
      return {
        ...state,
        projects: state.projects.filter((elem) => elem.id !== action.data.id),
      };
    case UPDATE:
      return {
        ...state,
        projects: [
          ...state.projects.filter((elem) => elem.id !== action.data.id),
          action.data,
        ],
      };
    default:
      return state;
  }
};
