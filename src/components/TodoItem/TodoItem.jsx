import styles from "./TodoItem.module.css";

const TodoItem = ({ title }) => {
  return <div className={styles.item}>{title}</div>;
};

export default TodoItem;
