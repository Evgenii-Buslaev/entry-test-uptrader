import { useSelector } from "react-redux";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";
import Modal from "../Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useForm from "../../hooks/useForm";
import { submitProjectForm } from "../../handlers/projects/projects";

import addProject from "../../assets/icons/add.png";
import styles from "./ProjectsList.module.css";

const ProjectsList = () => {
  const projects = useSelector((state) => state.projectReducer.projects);
  const { state, toggleModal, dispatch } = useForm();
  const { text, setText } = state;

  const submitForm = (e) =>
    submitProjectForm(e, dispatch, toggleModal, text, setText);

  const formData = {
    value: text,
    change: setText,
    text: "Project's title",
    action: "Create project",
    submit: submitForm,
  };

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={toggleModal} />
      <Modal children={<FormWrapper type="project" data={formData} />} />
      {projects.map((project) => (
        <ProjectItem
          id={project.id}
          title={project.title}
          key={project.title}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
