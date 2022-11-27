import { INIT, CREATE_TODO } from "../actions/actions";

export function initTodos(id) {
  return { type: INIT, data: { id: id, queue: [], development: [], done: [] } };
}

export function createTodo(id, title) {
  return {
    type: CREATE_TODO,
    data: { id: +id, todoId: Math.random(), title },
  };
}
