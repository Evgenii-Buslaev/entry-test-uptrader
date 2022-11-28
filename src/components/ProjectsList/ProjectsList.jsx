import { useSelector } from "react-redux";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

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

  const formComponents = [
    {
      element: (
        <InputText
          value={text}
          change={setText}
          text="Project's title"
          key="Project's title"
        />
      ),
    },
  ];

  const modalChildren = (
    <Form list={formComponents} action="Create project" submit={submitForm} />
  );

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={toggleModal} />
      <Modal children={modalChildren} />
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
