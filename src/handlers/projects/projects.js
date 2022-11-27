import {
  createProject,
  deleteProject,
  updateProject,
} from "../../store/action-creators/project";

import validateData from "../validate";

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

const removeProject = (id, dispatch) => {
  dispatch(deleteProject(id));
};

const putProject = (id, title, dispatch) => {
  dispatch(updateProject(title, id));
};

export { submitProjectForm, removeProject, putProject };
