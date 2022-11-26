import { CREATE, READ, UPDATE, DELETE } from "../actions/actions";

const initalState = [
  { id: 1, title: "React" },
  { id: 1, title: "Redux" },
  { id: 1, title: "TypeScript" },
];

export const projectReducer = (state = initalState, action) => {
  switch (action) {
    case READ:
      return state;
    default:
      return state;
  }
};
