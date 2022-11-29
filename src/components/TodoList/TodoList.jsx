import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import TodoSection from "../../components/TodoSection/TodoSection";
import Button from "../../UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useForm from "../../hooks/useForm";
import { submitTodoCreatingForm } from "../../handlers/todos/todos";

import create from "../../assets/icons/create.png";
import styles from "./TodoList.module.css";
import useDrapDrop from "../../hooks/useDragDrop";

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

  const dragDrop = useDrapDrop([
    { id: 0, section: queue },
    { id: 1, section: development },
    { id: 2, section: done },
  ]);

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
        <TodoSection title="Queue" list={queue} drop={dragDrop} />
        <TodoSection title="Development" list={development} drop={dragDrop} />
        <TodoSection title="Done" list={done} drop={dragDrop} />
      </div>
    </>
  );
};

export default TodoList;
