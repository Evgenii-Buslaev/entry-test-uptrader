import styles from "./TodoItem.module.css";

const TodoItem = ({ title, done }) => {
  return (
    <div className={done ? `${styles.item} ${styles.done}` : styles.item}>
      {title}
    </div>
  );
};

export default TodoItem;
