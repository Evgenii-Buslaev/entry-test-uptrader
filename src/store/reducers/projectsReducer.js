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
    default:
      return state;
  }
};
