import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import TodoSection from "../../components/TodoSection/TodoSection";
import Button from "../../UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormWrapper from "../FormWrapper/FormWrapper";

import useForm from "../../hooks/useForm";
import {
  submitTodoCreatingForm,
  updateAllColumns,
} from "../../handlers/todos/todos";

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

  const [sections, setSections] = useState([
    { id: 0, section: queue },
    { id: 1, section: development },
    { id: 2, section: done },
  ]);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const formData = {
    value: text,
    change: setText,
    text: "Todo's title",
    action: "Create todo",
    submit: submitForm,
  };

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragLeaveHandler(e) {}

  function dragStartHandler(e, section, item) {
    setCurrentSection(section);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {}

  function dropCardHandler(e, section) {
    section.section.push(currentItem);
    const currentIndex = currentSection.section.indexOf(currentItem);
    currentSection.section.splice(currentIndex, 1);
    setSections(
      sections.map((s) => {
        if (s.id === section.id) {
          return section;
        }
        if (s.id === currentSection.id) {
          return currentSection;
        }
        return s;
      })
    );
    updateAllColumns(
      params.id,
      sections.map((s) => s.section),
      dispatch
    );
  }

  const dragDrop = {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropCardHandler,
  };

  return (
    <>
      <Button path={create} alt="create todo" click={toggleModal} />
      <Modal children={<FormWrapper data={formData} />} />
      <div className={styles.list}>
        <TodoSection
          title="Queue"
          state={sections[0]}
          list={queue}
          drop={dragDrop}
        />
        <TodoSection
          title="Development"
          state={sections[1]}
          list={development}
          drop={dragDrop}
        />
        <TodoSection
          title="Done"
          state={sections[2]}
          list={done}
          drop={dragDrop}
        />
      </div>
    </>
  );
};

export default TodoList;
