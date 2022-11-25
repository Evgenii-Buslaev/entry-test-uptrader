import { Link } from "react-router-dom";

import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title }) => {
  return (
    <Link to="/todos">
      <div className={styles.item}>{title}</div>
    </Link>
  );
};

export default ProjectItem;
