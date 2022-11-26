import { useDispatch } from "react-redux";

import Button from "../../UI/Button/Button";

import { removeProject } from "../../handlers/projects/projects";

import remove from "../../assets/icons/remove.png";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <Button
        path={remove}
        alt="remove project"
        click={() => removeProject(id, dispatch)}
      />
    </div>
  );
};

export default ProjectItem;
