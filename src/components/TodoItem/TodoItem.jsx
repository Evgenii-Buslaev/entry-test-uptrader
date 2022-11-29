import { useDispatch } from "react-redux";
import { removeTodoItem } from "../../handlers/todos/todos";

import remove from "../../assets/icons/cancel.png";
import styles from "./TodoItem.module.css";

const TodoItem = ({ data, drop, section }) => {
  const { title, done, id, todoId } = data;
  const dispatch = useDispatch();

  const updateDropArray = () => {
    const queue = drop.sections[0].section.filter(
      (elem) => elem.todoId !== todoId
    );
    const development = drop.sections[1].section.filter(
      (elem) => elem.todoId !== todoId
    );
    const done = drop.sections[2].section.filter(
      (elem) => elem.todoId !== todoId
    );
    drop.setSections([
      { id: 0, section: queue },
      { id: 1, section: development },
      { id: 2, section: done },
    ]);
  };

  const deleteItem = () => {
    removeTodoItem(id, todoId, dispatch);
    updateDropArray();
  };

  const {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
  } = drop;

  return (
    <div
      draggable={true}
      className={done ? `${styles.item} ${styles.done}` : styles.item}
      onMouseEnter={(e) => dragStartHandler(e, section, data)}
      onClick={(e) => dragStartHandler(e, section, data)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
    >
      {title}
      <img
        src={remove}
        alt="remove task"
        className={styles.remove}
        onClick={deleteItem}
      ></img>
    </div>
  );
};

export default TodoItem;
