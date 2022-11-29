import { useState } from "react";
import Form from "../Form/Form";
import InputText from "../../UI/InputText/InputText";

const TodoForm = (todo) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState("");

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
  return (
    <Form
      list={list}
      action="Save changes"
      submit={(e) => {
        e.preventDefault();
        console.log("submit edited todo!");
      }}
    />
  );
};

export default TodoForm;
