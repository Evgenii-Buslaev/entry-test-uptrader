import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./ProjectsList.module.css";

const projects = [
  { id: 1, title: "React" },
  { id: 1, title: "Redux" },
  { id: 1, title: "TypeScript" },
];

const ProjectsList = () => {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectItem title={project.title} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectsList;
