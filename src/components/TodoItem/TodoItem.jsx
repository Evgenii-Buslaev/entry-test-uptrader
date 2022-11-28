import { useDispatch } from "react-redux";
import { removeTodoItem } from "../../handlers/todos/todos";

import remove from "../../assets/icons/cancel.png";
import styles from "./TodoItem.module.css";

const TodoItem = ({ title, done, projectId, todoId }) => {
  const dispatch = useDispatch();
  const deleteItem = () => removeTodoItem(projectId, todoId, dispatch);

  return (
    <div className={done ? `${styles.item} ${styles.done}` : styles.item}>
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
