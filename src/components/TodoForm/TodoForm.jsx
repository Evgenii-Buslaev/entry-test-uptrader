import { useDispatch } from "react-redux";

import InputText from "../../UI/InputText/InputText";
import InputDate from "../../UI/InputDate/InputeDate";
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
  } = state;
  const { created } = updatedElem;

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    updateTodosProps(updatedTodos, dispatch);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.number}>{targetElem.number}</div>
      <InputText text="Todo's title" value={title} change={setTitle} />
      <InputText
        text="Todo's description"
        value={description}
        change={setDescription}
      />
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
      {targetElem.inWork ? (
        <div className={styles.number}>In work: {targetElem.inWork}</div>
      ) : null}

      <button type="submit" className={styles.submit}>
        Save changes
      </button>
    </form>
  );
};

export default TodoForm;
