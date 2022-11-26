import { createProject } from "../../store/action-creators/project";

const submitProjectForm = (e, dispatch, toggleModal, title) => {
  e.preventDefault();
  if (validateData(title)) {
    const id = Math.random();
    dispatch(createProject(title, id));
    toggleModal();
  }
};

const validateData = (data) => {
  if (!data) {
    alert("Please, fill in the gaps");
    return false;
  }
  return true;
};

export default submitProjectForm;
