import {
  INIT,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODOS,
} from "../actions/actions";

export function initTodos(id) {
  return { type: INIT, data: { id: id, queue: [], development: [], done: [] } };
}

export function createTodo(id, title) {
  return {
    type: CREATE_TODO,
    data: { id: Number(id), todoId: Math.random(), title },
  };
}

export function deleteTodo(id, todoId) {
  return {
    type: DELETE_TODO,
    data: { id: Number(id), todoId },
  };
}

export function updateTodos(id, sections) {
  return {
    type: UPDATE_TODOS,
    data: { id: Number(id), sections },
  };
}
