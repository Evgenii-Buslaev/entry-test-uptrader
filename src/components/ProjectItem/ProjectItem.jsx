import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title }) => {
  return <div className={styles.item}>{title}</div>;
};

export default ProjectItem;
