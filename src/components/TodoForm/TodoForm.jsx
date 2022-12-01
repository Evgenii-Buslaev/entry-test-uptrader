import { useDispatch } from "react-redux";

import InputText from "../../UI/InputText/InputText";
import InputDate from "../../UI/InputDate/InputeDate";
import InputFile from "../../UI/InputFile/InputFile";
import Select from "../../UI/Select/Select";
import SubtasksList from "../SubtasksList/SubtasksList";
import { updateTodosProps } from "../../handlers/todos/todos";

import styles from "./TodoForm.module.css";
import useUpdate from "../../hooks/useUpdate";

const TodoForm = ({ todo, targetId }) => {
  const { state, updatedTodos, targetElem, updatedElem } = useUpdate(
    todo,
    targetId
  );
  const {
    title,
    setTitle,
    description,
    setDescription,
    deadline,
    setDeadline,
    importance,
    setImportance,
    files,
    setFiles,
    subtask,
    setSubtask,
    subtasks,
    setSubtasks,
  } = state;
  const { created } = updatedElem;

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    updateTodosProps(updatedTodos, dispatch);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.number}>{targetElem.number}.</div>
      <InputText text="Todo's title" value={title} change={setTitle} />
      <InputText
        text="Todo's description"
        value={description}
        change={setDescription}
      />
      <div className={styles.datesWrapper}>
        <div className={styles.todoDates}>
          <InputDate
            name="created"
            label="Created at:"
            dateString={created}
            disabled={true}
          />
          <InputDate
            name="deadline"
            label="Do till:"
            dateString={deadline}
            change={setDeadline}
            disabled={false}
          />
        </div>
        <Select value={importance} change={setImportance} />
      </div>
      {targetElem.inWork ? (
        <div className={styles.number}>In work: {targetElem.inWork}</div>
      ) : null}
      <div className={styles.files}>{files}</div>
      <div className={styles.status}>Status: {targetElem.status}</div>
      <InputFile change={setFiles} />
      <div className={styles.subtaskForm}>
        <InputText text="Subtask's title" value={subtask} change={setSubtask} />
        <button
          type="button"
          className={styles.subTaskBtn}
          onClick={() => {
            setSubtasks([
              ...subtasks,
              { id: Math.random(), title: subtask, done: false },
            ]);
            setSubtask("");
          }}
        >
          Create subtask
        </button>
      </div>
      <SubtasksList list={subtasks} change={setSubtasks} />
      <button type="submit" className={styles.submit}>
        Save changes
      </button>
    </form>
  );
};

export default TodoForm;
