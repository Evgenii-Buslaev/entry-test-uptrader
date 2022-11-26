import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

import remove from "../../assets/icons/remove.png";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title }) => {
  return (
    <Link to="/todos">
      <div className={styles.item}>
        <h3>{title}</h3>
        <Button path={remove} alt="remove project" />
      </div>
    </Link>
  );
};

export default ProjectItem;
