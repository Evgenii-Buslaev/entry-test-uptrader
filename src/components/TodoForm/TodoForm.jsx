import { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";
import InputText from "../../UI/InputText/InputText";
import { updateTodosProps } from "../../handlers/todos/todos";

const TodoForm = ({ todo, targetId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  console.log(todo);

  const updatedTodos = {
    id: todo.id,
    queue: todo.queue,
    development: todo.development,
    done: todo.done,
  };

  const submit = (e) => {
    e.preventDefault();
    updateTodosProps(updatedTodos, dispatch);
  };

  const list = [
    {
      element: (
        <InputText text="Todo's title" value={title} change={setTitle} />
      ),
    },
    {
      element: (
        <InputText
          text="Todo's description"
          value={description}
          change={setDescription}
        />
      ),
    },
  ];
  return <Form list={list} action="Save changes" submit={submit} />;
};

export default TodoForm;
