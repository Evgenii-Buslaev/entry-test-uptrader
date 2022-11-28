import { useState } from "react";
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
        <TodoSection title="Queue" list={queue} />
        <TodoSection title="Development" list={development} />
        <TodoSection title="Done" list={done} />
      </div>
    </>
  );
};

export default TodoList;
