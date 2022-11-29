import styles from "./TodoSection.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoSection = ({ title, list, drop }) => {
  const { dragOverHandler, dropCardHandler } = drop;

  let state;
  switch (title) {
    case "Queue":
      state = drop.sections[0];
      break;
    case "Development":
      state = drop.sections[1];
      break;
    case "Done":
      state = drop.sections[2];
      break;
    default:
      return state;
  }

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
