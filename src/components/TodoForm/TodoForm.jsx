import { useDispatch } from "react-redux";

import InputText from "../../UI/InputText/InputText";
import { updateTodosProps } from "../../handlers/todos/todos";

import styles from "./TodoForm.module.css";
import useUpdate from "../../hooks/useUpdate";

const TodoForm = ({ todo, targetId }) => {
  const { state, updatedTodos } = useUpdate(todo, targetId);
  const { title, setTitle, description, setDescription } = state;

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    updateTodosProps(updatedTodos, dispatch);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <InputText text="Todo's title" value={title} change={setTitle} />
      <InputText
        text="Todo's description"
        value={description}
        change={setDescription}
      />
      <button type="submit" className={styles.submit}>
        Save changes
      </button>
    </form>
  );
};

export default TodoForm;
