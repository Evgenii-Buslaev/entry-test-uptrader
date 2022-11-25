import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state);

  const { queue, development, done } = todos;

  return (
    <div className={styles.list}>
      <section className={styles.column}>
        <h3>Queue</h3>
        {todos.queue.map((todo) => (
          <TodoItem key={Math.random()} title={todo.title} />
        ))}
      </section>
      <section className={styles.column}>
        <h3>Development</h3>
        {development.map((todo) => (
          <TodoItem key={Math.random()} title={todo.title} />
        ))}
      </section>
      <section className={styles.column}>
        <h3>Done</h3>
        {done.map((todo) => (
          <TodoItem key={Math.random()} title={todo.title} done={todo.done} />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
