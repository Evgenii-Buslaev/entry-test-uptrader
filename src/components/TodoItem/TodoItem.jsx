import { useDispatch, useSelector } from "react-redux";
import { removeTodoItem, updateDropArray } from "../../handlers/todos/todos";
import useModal from "../../hooks/useModal";

import TodoForm from "../TodoForm/TodoForm";
import Modal from "../Modal/Modal";

import remove from "../../assets/icons/cancel.png";
import styles from "./TodoItem.module.css";

const TodoItem = ({ data, drop, section }) => {
  const { modalOpenned, toggleOpenned } = useModal();
  const dispatch = useDispatch();

  const { title, done, id, todoId } = data;

  const todo = useSelector((state) =>
    state.todoReducer.todos.find((elem) => elem.id === id)
  );
  const targetTodo =
    todo.queue.find((todo) => todo.todoId === todoId) ||
    todo.development.find((todo) => todo.todoId === todoId) ||
    todo.done.find((todo) => todo.todoId === todoId);

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
        if (e.target.className.includes("item")) {
          toggleOpenned();
        }
      }}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
    >
      {title}
      <Modal
        children={<TodoForm todo={targetTodo} />}
        openned={modalOpenned}
        toggler={toggleOpenned}
      />
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
