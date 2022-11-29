import { useDispatch } from "react-redux";
import { removeTodoItem, updateDropArray } from "../../handlers/todos/todos";
import useForm from "../../hooks/useForm";

import TodoForm from "../TodoForm/TodoForm";
import Modal from "../Modal/Modal";

import remove from "../../assets/icons/cancel.png";
import styles from "./TodoItem.module.css";

const TodoItem = ({ data, drop, section }) => {
  const { toggleModal, dispatch } = useForm();
  const { title, done, id, todoId } = data;

  const deleteItem = () => {
    removeTodoItem(id, todoId, dispatch);
    updateDropArray(drop, todoId);
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
      className={
        section.id === 2 ? `${styles.item} ${styles.done}` : styles.item
      }
      onMouseEnter={(e) => dragStartHandler(e, section, data)}
      onClick={(e) => {
        dragStartHandler(e, section, data);
        toggleModal();
      }}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
    >
      {title}
      {/* <Modal children={<TodoForm />} /> */}
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
