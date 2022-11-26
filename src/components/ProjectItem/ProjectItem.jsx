import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../UI/Button/Button";

import { putProject, removeProject } from "../../handlers/projects/projects";

import remove from "../../assets/icons/remove.png";
import open from "../../assets/icons/to-todo.png";
import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title, id }) => {
  const [itemTitle, setItemTitle] = useState(title);
  const navigator = useNavigate();

  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.projectReducer.projects.find((elem) => elem.id === id)
  );

  const updateItem = () => putProject(id, itemTitle, dispatch);
  let openTodos = () => navigator(`/${id}`);

  return (
    <div
      className={styles.item}
      onClick={(e) => {
        if (e.target.tagName === "DIV") {
          openTodos();
        }
      }}
    >
      <input
        className={styles.title}
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
        onBlur={() => {
          if (!itemTitle) {
            alert("Title cannot be empty");
            setItemTitle(item.title);
            return;
          }
          updateItem();
        }}
      />
      <Button
        path={remove}
        alt="remove project"
        click={() => removeProject(id, dispatch)}
      />
      <Button path={open} alt="open todo-list" click={openTodos} />
    </div>
  );
};

export default ProjectItem;
