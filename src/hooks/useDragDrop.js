import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAllColumns } from "../handlers/todos/todos";

const useDrapDrop = () => {
  const params = useParams();

  const todos = useSelector((state) =>
    state.todoReducer.todos.find((elem) => +elem.id === +params.id)
  );
  const { queue, development, done } = todos;

  const [sections, setSections] = useState([
    { id: 0, section: queue },
    { id: 1, section: development },
    { id: 2, section: done },
  ]);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const dispatch = useDispatch();

  // drag n drop handlers
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className.includes("item")) {
      e.target.style.boxShadow = "0 5px 7px gray";
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(e, section, item) {
    setCurrentSection(section);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }

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

  return {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropCardHandler,
    sections,
    setSections,
  };
};

export default useDrapDrop;
