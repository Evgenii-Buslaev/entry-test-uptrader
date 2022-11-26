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
  return (
    <div className={styles.list}>
      <Button path={addProject} alt="add project" />

      {projects.map((project) => (
        <ProjectItem title={project.title} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectsList;
