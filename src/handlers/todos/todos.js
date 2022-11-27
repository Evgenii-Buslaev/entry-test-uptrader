import { createTodo } from "../../store/action-creators/todos";
import validateData from "../validate";

const submitTodoCreatingForm = (
  e,
  id,
  dispatch,
  toggleModal,
  title,
  setTitle
) => {
  e.preventDefault();
  if (validateData(title)) {
    dispatch(createTodo(id, title));
    toggleModal();
    setTitle("");
  }
};

export { submitTodoCreatingForm };
