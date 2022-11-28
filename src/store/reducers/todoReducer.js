import { INIT, CREATE_TODO, DELETE_TODO } from "../actions/actions";

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
      console.log("invoked");
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

      console.log(queue);
      console.log(action.data.todoId);

      return {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          filteredElem,
        ],
      };
    default:
      return state;
  }
};
