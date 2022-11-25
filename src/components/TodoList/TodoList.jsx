import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.list}>
      <section className={styles.column}></section>
      <section className={styles.column}></section>
      <section className={styles.column}></section>
    </div>
  );
};

export default TodoList;
