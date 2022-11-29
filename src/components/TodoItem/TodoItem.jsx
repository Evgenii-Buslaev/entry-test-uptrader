import { useDispatch } from "react-redux";
import { removeTodoItem } from "../../handlers/todos/todos";

import remove from "../../assets/icons/cancel.png";
import styles from "./TodoItem.module.css";

const TodoItem = ({ data, drop, section }) => {
  const { title, done, id, todoId } = data;
  const dispatch = useDispatch();
  const deleteItem = () => removeTodoItem(id, todoId, dispatch);

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
