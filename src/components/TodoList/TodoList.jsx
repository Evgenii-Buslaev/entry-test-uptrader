import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todos = {
  queue: [{ title: "Learn Node.js" }, { title: "Learn MongoDB" }],
  development: [{ title: "Learn TypeScript" }, { title: "Do entry test" }],
  done: [
    { title: "Public CV" },
    { title: "Get entry test" },
    { title: "Create react app" },
  ],
};

const TodoList = () => {
  const { queue, development, done } = todos;
  return (
    <div className={styles.list}>
      <section className={styles.column}>
        <h3>Queue</h3>
        {queue.map((todo) => (
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
          <TodoItem key={Math.random()} title={todo.title} />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
