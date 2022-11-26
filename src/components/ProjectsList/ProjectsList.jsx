import { useState, useContext } from "react";
import { ModalContext } from "../../context/context";

import ProjectItem from "../ProjectItem/ProjectItem";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

import addProject from "../../assets/icons/add.png";
import styles from "./ProjectsList.module.css";

const projects = [
  { id: 1, title: "React" },
  { id: 1, title: "Redux" },
  { id: 1, title: "TypeScript" },
];

const ProjectsList = () => {
  const [projectName, setProjectName] = useState("");
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

  const { state } = useContext(ModalContext);
  const { modalOpenned, setModalOpenned } = state;

  const openModal = () => setModalOpenned(!modalOpenned);

  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" click={openModal} />
      <Modal children={<Form list={form} action="Create project" />} />
      {projects.map((project) => (
        <ProjectItem title={project.title} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectsList;
