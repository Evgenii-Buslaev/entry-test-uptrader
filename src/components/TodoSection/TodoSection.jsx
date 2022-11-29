import styles from "./TodoSection.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoSection = ({ title, state, list, drop }) => {
  const { dragOverHandler, dropCardHandler } = drop;
  return (
    <section
      className={styles.column}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHandler(e, state)}
    >
      <h3>{title}</h3>
      {list.map((todo) => (
        <TodoItem key={Math.random()} data={todo} drop={drop} section={state} />
      ))}
    </section>
  );
};

export default TodoSection;
