import {
  INIT,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODOS_SECTIONS,
  UPDATE_TODOS,
} from "../actions/actions";

import { calculateDates } from "../../handlers/calculateDates";

export function initTodos(id) {
  return { type: INIT, data: { id: id, queue: [], development: [], done: [] } };
}

export function createTodo(id, title) {
  const created = new Date()
    .toLocaleString()
    .split(",")[0]
    .split(".")
    .reverse()
    .join("-");

  return {
    type: CREATE_TODO,
    data: {
      id: Number(id),
      number: null,
      todoId: Math.random(),
      title,
      description: "",
      created: created,
      inWork: `${
        calculateDates(created) > 1
          ? calculateDates(created) + " days"
          : calculateDates(created) + " day"
      }`,
      status: "queue",
      subtasks: [],
      comments: [],
    },
  };
}

export function deleteTodo(id, todoId) {
  return {
    type: DELETE_TODO,
    data: { id: Number(id), todoId },
  };
}

export function updateTodosSections(id, sections) {
  return {
    type: UPDATE_TODOS_SECTIONS,
    data: { id: Number(id), sections },
  };
}

export function updateTodos(todos) {
  const { id, queue, development, done } = todos;
  return {
    type: UPDATE_TODOS,
    data: { id, queue, development, done },
  };
}
