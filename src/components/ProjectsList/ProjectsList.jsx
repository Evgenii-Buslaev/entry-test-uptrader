import { useContext } from "react";
import { ModalContext } from "../../context/context";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";

import addProject from "../../assets/icons/add.png";
import styles from "./ProjectsList.module.css";

const projects = [
  { id: 1, title: "React" },
  { id: 1, title: "Redux" },
  { id: 1, title: "TypeScript" },
];

const ProjectsList = () => {
  const { state } = useContext(ModalContext);
  const { modalOpenned, setModalOpenned } = state;

  const openModal = () => setModalOpenned(!modalOpenned);

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={openModal} />
      {projects.map((project) => (
        <ProjectItem title={project.title} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectsList;
