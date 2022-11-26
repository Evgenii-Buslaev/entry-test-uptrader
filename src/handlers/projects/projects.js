import {
  createProject,
  deleteProject,
} from "../../store/action-creators/project";

const submitProjectForm = (e, dispatch, toggleModal, title, setTitle) => {
  e.preventDefault();
  if (validateData(title)) {
    const id = Math.random();
    dispatch(createProject(title, id));
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

export { submitProjectForm, removeProject };
