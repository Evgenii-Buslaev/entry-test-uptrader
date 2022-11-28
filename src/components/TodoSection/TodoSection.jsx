import styles from "./TodoSection.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoSection = ({ title, list }) => {
  return (
    <section className={styles.column}>
      <h3>{title}</h3>
      {list.map((todo) => (
        <TodoItem
          projectId={todo.id}
          todoId={todo.todoId}
          key={Math.random()}
          title={todo.title}
        />
      ))}
    </section>
  );
};

export default TodoSection;
