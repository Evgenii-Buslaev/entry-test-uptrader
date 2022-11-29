import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

import home from "../../assets/icons/home.png";
import projects from "../../assets/icons/projects.png";
import todos from "../../assets/icons/todos.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navList}>
      <Link className={styles.imageBtn} to="/">
        <img src={home} alt="homepage"></img>
      </Link>
      <Link to="/projects">
        <Button text="All projects" path={projects} alt="projects" />
      </Link>
    </nav>
  );
};

export default Navigation;
