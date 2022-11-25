import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navList}>
      <Link to="/projects">
        <Button text="All projects" />
      </Link>
      <Link to="/todos">
        <Button text="All todos" />
      </Link>
    </nav>
  );
};

export default Navigation;
