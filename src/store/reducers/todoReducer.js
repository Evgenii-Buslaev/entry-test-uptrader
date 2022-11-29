import {
  INIT,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODOS,
} from "../actions/actions";

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

    case DELETE_TODO:
      const targetProject = state.todos.find(
        (elem) => elem.id === action.data.id
      );
      const queue = targetProject.queue.filter(
        (elem) => elem.todoId !== action.data.todoId
      );
      const development = targetProject.development.filter(
        (elem) => elem.todoId !== action.data.todoId
      );
      const done = targetProject.done.filter(
        (elem) => elem.todoId !== action.data.todoId
      );
      const filteredElem = { id: targetProject.id, queue, development, done };

      return {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          filteredElem,
        ],
      };

    case UPDATE_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          {
            id: +action.data.id,
            queue: action.data.sections[0],
            development: action.data.sections[1],
            done: action.data.sections[2],
          },
        ],
      };

    default:
      return state;
  }
};
