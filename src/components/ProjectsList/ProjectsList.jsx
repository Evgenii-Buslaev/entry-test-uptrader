import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";
import Modal from "../Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useModal from "../../hooks/useModal";
import { submitProjectForm } from "../../handlers/projects/projects";

import addProject from "../../assets/icons/add.png";
import styles from "./ProjectsList.module.css";

const ProjectsList = () => {
  const projects = useSelector((state) => state.projectReducer.projects);
  const { modalOpenned, toggleOpenned } = useModal();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) =>
    submitProjectForm(e, dispatch, toggleOpenned, text, setText);

  const formData = {
    value: text,
    change: setText,
    text: "Project's title",
    action: "Create project",
    submit: submitForm,
  };

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={toggleOpenned} />
      <Modal
        children={<FormWrapper type="project" data={formData} />}
        openned={modalOpenned}
        toggler={toggleOpenned}
      />
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
