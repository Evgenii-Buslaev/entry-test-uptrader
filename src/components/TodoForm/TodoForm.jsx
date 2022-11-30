import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import InputText from "../../UI/InputText/InputText";
import { updateTodosProps } from "../../handlers/todos/todos";

import styles from "./TodoForm.module.css";

const TodoForm = ({ todo, targetId }) => {
  const { id, queue, development, done } = todo;

  const targetElem =
    queue.find((t) => t.todoId === targetId) ||
    development.find((t) => t.todoId === targetId) ||
    done.find((t) => t.todoId === targetId);

  const [title, setTitle] = useState(targetElem.title);
  const [description, setDescription] = useState(targetElem.description || "");
  const dispatch = useDispatch();

  const updatedElem = {
    id: id,
    todoId: targetId,
    title: title,
    description: description,
  };

  const updatedTodos = {
    id,
    queue,
    development,
    done,
  };

  if (queue.find((t) => t.todoId === targetId)) {
    updatedTodos.queue = [
      ...queue.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }
  if (development.find((t) => t.todoId === targetId)) {
    updatedTodos.development = [
      ...development.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }
  if (done.find((t) => t.todoId === targetId)) {
    updatedTodos.done = [
      ...done.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }

  const submit = (e) => {
    e.preventDefault();
    updateTodosProps(updatedTodos, dispatch);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <InputText text="Todo's title" value={title} change={setTitle} />
      <InputText
        text="Todo's description"
        value={description}
        change={setDescription}
      />
      <button type="submit" className={styles.submit}>
        Save changes
      </button>
    </form>
  );
};

export default TodoForm;
