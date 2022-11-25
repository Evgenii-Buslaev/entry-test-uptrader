import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const todos = {
  queue: [
    { title: "Learn Node.js", done: false },
    { title: "Learn MongoDB", done: false },
  ],
  development: [
    { title: "Learn TypeScript", done: false },
    { title: "Do entry test", done: false },
  ],
  done: [
    { title: "Public CV", done: true },
    { title: "Get entry test", done: true },
    { title: "Create react app", done: true },
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
          <TodoItem key={Math.random()} title={todo.title} done={todo.done} />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
