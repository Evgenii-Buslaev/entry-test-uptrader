import {
  createProject,
  deleteProject,
  updateProject,
} from "../../store/action-creators/project";

import { initTodos } from "../../store/action-creators/todos";

const submitProjectForm = (e, dispatch, toggleModal, title, setTitle) => {
  e.preventDefault();
  if (validateData(title)) {
    const id = Math.random();
    dispatch(createProject(title, id));
    dispatch(initTodos(id));
    toggleModal();
    setTitle("");
  }
};

const validateData = (data) => {
  if (!data) {
    alert("Please, fill in the gaps");
    return false;
  }
  return true;
};

const removeProject = (id, dispatch) => {
  dispatch(deleteProject(id));
};

const putProject = (id, title, dispatch) => {
  dispatch(updateProject(title, id));
};

export { submitProjectForm, removeProject, putProject };