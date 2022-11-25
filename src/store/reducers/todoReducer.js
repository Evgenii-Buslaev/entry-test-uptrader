import { CREATE, READ, UPDATE, DELETE } from "../actions/actions";

const initalState = {
  queue: [
    { title: "Learn Node.js", done: false },
    { title: "Learn MongoDB", done: false },
  ],
  development: [
    { title: "Learn TypeScript", done: false },
    { title: "Do entry test", done: false },
  ],
  done: [
    { title: "Public CV", done: true },
    { title: "Get entry test", done: true },
    { title: "Create react app", done: true },
  ],
};

export const todoReducer = (state = initalState, action) => {
  switch (action) {
    case READ:
      return state;
    default:
      return state;
  }
};
