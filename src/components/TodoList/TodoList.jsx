import styles from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={styles.list}>
      <section className={styles.column}></section>
      <section className={styles.column}></section>
      <section className={styles.column}></section>
      <h1>TODO</h1>
    </div>
  );
};

export default TodoList;
