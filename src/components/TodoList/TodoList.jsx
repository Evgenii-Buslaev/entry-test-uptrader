import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import TodoItem from "../TodoItem/TodoItem";
import Button from "../../UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useForm from "../../hooks/useForm";
import { submitTodoCreatingForm } from "../../handlers/todos/todos";

import create from "../../assets/icons/create.png";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const params = useParams();
  const { state, toggleModal, dispatch } = useForm();
  const { text, setText } = state;

  const submitForm = (e) =>
    submitTodoCreatingForm(e, params.id, dispatch, toggleModal, text, setText);

  let todos;
  if (params.id) {
    todos = useSelector((state) =>
      state.todoReducer.todos.find((elem) => +elem.id === +params.id)
    );
  } else {
    todos = useSelector((state) => state.todoReducer.all);
  }
  const { queue, development, done } = todos;

  const formData = {
    value: text,
    change: setText,
    text: "Todo's title",
    action: "Create todo",
    submit: submitForm,
  };

  return (
    <>
      <Button path={create} alt="create todo" click={toggleModal} />
      <Modal children={<FormWrapper data={formData} />} />
      <div className={styles.list}>
        <section className={styles.column}>
          <h3>Queue</h3>
          {queue.map((todo) => (
            <TodoItem
              projectId={todo.id}
              todoId={todo.todoId}
              key={Math.random()}
              title={todo.title}
            />
          ))}
        </section>
        <section className={styles.column}>
          <h3>Development</h3>
          {development.map((todo) => (
            <TodoItem
              projectId={todo.id}
              todoId={todo.todoId}
              key={Math.random()}
              title={todo.title}
            />
          ))}
        </section>
        <section className={styles.column}>
          <h3>Done</h3>
          {done.map((todo) => (
            <TodoItem
              projectId={todo.id}
              todoId={todo.todoId}
              key={Math.random()}
              title={todo.title}
              done={todo.done}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default TodoList;
