import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import TodoSection from "../../components/TodoSection/TodoSection";
import Button from "../../UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useModal from "../../hooks/useModal";
import { submitTodoCreatingForm } from "../../handlers/todos/todos";

import create from "../../assets/icons/create.png";
import styles from "./TodoList.module.css";
import useDrapDrop from "../../hooks/useDragDrop";

const TodoList = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const { modalOpenned, toggleOpenned } = useModal();
  const dispatch = useDispatch();

  const submitForm = (e) =>
    submitTodoCreatingForm(
      e,
      params.id,
      dispatch,
      toggleOpenned,
      title,
      setTitle
    );

  const todos = useSelector((state) =>
    state.todoReducer.todos.find((elem) => +elem.id === +params.id)
  );
  const { queue, development, done } = todos;

  const dragDrop = useDrapDrop();

  const formData = {
    value: title,
    change: setTitle,
    text: "Todo's title",
    action: "Create todo",
    submit: submitForm,
  };

  return (
    <>
      <Button path={create} alt="create todo" click={toggleOpenned} />
      <Modal
        children={<FormWrapper type="create_todo" data={formData} />}
        openned={modalOpenned}
        toggler={toggleOpenned}
      />
      <div className={styles.list}>
        <TodoSection title="Queue" list={queue} drop={dragDrop} />
        <TodoSection title="Development" list={development} drop={dragDrop} />
        <TodoSection title="Done" list={done} drop={dragDrop} />
      </div>
    </>
  );
};

export default TodoList;
