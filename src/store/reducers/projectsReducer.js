import { CREATE, READ, UPDATE, DELETE } from "../actions/actions";

const initalState = {
  projects: [
    { id: 1, title: "React" },
    { id: 1, title: "Redux" },
    { id: 1, title: "TypeScript" },
  ],
};

export const projectReducer = (state = initalState, action) => {
  switch (action.type) {
    case READ:
      return state;
    case CREATE:
      return { ...state, projects: [...state.projects, action.data] };

    default:
      return state;
  }
};
