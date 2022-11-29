import {
  createTodo,
  deleteTodo,
  updateTodos,
} from "../../store/action-creators/todos";
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

const removeTodoItem = (id, todoId, dispatch) => {
  dispatch(deleteTodo(id, todoId));
};

const updateAllColumns = (id, sections, dispatch) => {
  dispatch(updateTodos(id, sections));
};

const updateDropArray = (state, id) => {
  const queue = state.sections[0].section.filter((elem) => elem.todoId !== id);
  const development = state.sections[1].section.filter(
    (elem) => elem.todoId !== id
  );
  const done = state.sections[2].section.filter((elem) => elem.todoId !== id);
  state.setSections([
    { id: 0, section: queue },
    { id: 1, section: development },
    { id: 2, section: done },
  ]);
};

export {
  submitTodoCreatingForm,
  removeTodoItem,
  updateAllColumns,
  updateDropArray,
};
