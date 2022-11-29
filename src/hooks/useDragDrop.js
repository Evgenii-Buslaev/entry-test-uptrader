import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAllColumns } from "../handlers/todos/todos";

const useDrapDrop = (array) => {
  const [sections, setSections] = useState(array);
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
  };
};

export default useDrapDrop;
