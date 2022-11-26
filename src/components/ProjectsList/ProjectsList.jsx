import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalContext } from "../../context/context";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

import submitProjectForm from "../../handlers/forms/forms";

import addProject from "../../assets/icons/add.png";
import styles from "./ProjectsList.module.css";

const ProjectsList = () => {
  const projects = useSelector((state) => state.projectReducer.projects);
  const [projectName, setProjectName] = useState("");

  const { state } = useContext(ModalContext);
  const { modalOpenned, setModalOpenned } = state;
  const toggleModal = () => setModalOpenned(!modalOpenned);

  const dispatch = useDispatch();

  const form = [
    {
      element: (
        <InputText
          value={projectName}
          change={setProjectName}
          text="Project's title"
          key="Project's title"
        />
      ),
    },
  ];

  const submitForm = (e) =>
    submitProjectForm(e, dispatch, toggleModal, projectName);

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={toggleModal} />
      <Modal
        children={
          <Form list={form} action="Create project" submit={submitForm} />
        }
      />
      {projects.map((project) => (
        <ProjectItem title={project.title} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectsList;
