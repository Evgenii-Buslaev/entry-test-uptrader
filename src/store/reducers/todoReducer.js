import { INIT, CREATE_TODO } from "../actions/actions";

const initalState = {
  todos: [],
  all: { queue: [], development: [], done: [] },
};

export const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case INIT:
      return { ...state, todos: [...state.todos, action.data] };
    case CREATE_TODO:
      const elem = state.todos.find((elem) => elem.id === action.data.id);
      elem.queue.push(action.data);
      return {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          elem,
        ],
      };
    default:
      return state;
  }
};
