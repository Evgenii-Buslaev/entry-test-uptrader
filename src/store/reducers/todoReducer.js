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
      return {
        ...state,
        todos: [...state.todos.filter(elem.id !== action.data.id), action.data],
      };
    default:
      return state;
  }
};
