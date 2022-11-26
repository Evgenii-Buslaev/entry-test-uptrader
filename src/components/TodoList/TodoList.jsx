import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const params = useParams();

  let todos;
  if (params.id) {
    todos = useSelector((state) =>
      state.todoReducer.todos.find((elem) => +elem.id === +params.id)
    );
  } else {
    todos = useSelector((state) => state.todoReducer.all);
  }
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
