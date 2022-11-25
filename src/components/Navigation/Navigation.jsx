import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navList}>
      <Link to="/projects">
        <Button text="Все проекты" />
      </Link>
      <Link to="/todos">
        <Button text="Все задачи" />
      </Link>
    </nav>
  );
};

export default Navigation;
