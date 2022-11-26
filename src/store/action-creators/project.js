import { CREATE, DELETE, UPDATE } from "../actions/actions";

export function createProject(title, id) {
  return { type: CREATE, data: { title, id } };
}

export function updateProject(title, id) {
  return { type: UPDATE, data: { title, id } };
}

export function deleteProject(id) {
  return { type: DELETE, data: { id } };
}
