import {
  INIT,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODOS_SECTIONS,
  UPDATE_TODOS,
} from "../actions/actions";

const initalState = () => {
  if (localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return {
      todos: [],
    };
  }
};

export const todoReducer = (state = initalState(), action) => {
  switch (action.type) {
    case INIT:
      const initState = { ...state, todos: [...state.todos, action.data] };
      localStorage.setItem("todos", JSON.stringify(initState));
      return initState;

    case CREATE_TODO:
      const elem = state.todos.find((elem) => elem.id === action.data.id);
      const elemIndex =
        elem.queue.length + elem.development.length + elem.done.length;

      const todo = action.data;
      todo.number = elemIndex + 1;

      elem.queue.push(todo);

      const createState = {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          elem,
        ],
      };

      localStorage.setItem("todos", JSON.stringify(createState));
      return createState;

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

      const deleteState = {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          filteredElem,
        ],
      };
      localStorage.setItem("todos", JSON.stringify(deleteState));
      return deleteState;

    case UPDATE_TODOS_SECTIONS:
      const updateSectionsState = {
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
      localStorage.setItem("todos", JSON.stringify(updateSectionsState));
      return updateSectionsState;

    case UPDATE_TODOS:
      const updateTodosState = {
        ...state,
        todos: [
          ...state.todos.filter((elem) => elem.id !== action.data.id),
          action.data,
        ],
      };
      localStorage.setItem("todos", JSON.stringify(updateTodosState));
      return updateTodosState;

    default:
      return state;
  }
};
