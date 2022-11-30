import { useState } from "react";

const useUpdate = (todo, targetId) => {
  const { id, queue, development, done } = todo;

  const targetElem =
    queue.find((t) => t.todoId === targetId) ||
    development.find((t) => t.todoId === targetId) ||
    done.find((t) => t.todoId === targetId);

  const [title, setTitle] = useState(targetElem.title);
  const [description, setDescription] = useState(targetElem.description);
  const [deadline, setDeadline] = useState(targetElem.deadline || "");

  const updatedElem = {
    id: id,
    todoId: targetId,
    title: title,
    description: description,
    created: targetElem.created,
    deadline: deadline,
  };

  const updatedTodos = {
    id,
    queue,
    development,
    done,
  };

  if (queue.find((t) => t.todoId === targetId)) {
    updatedTodos.queue = [
      ...queue.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }
  if (development.find((t) => t.todoId === targetId)) {
    updatedTodos.development = [
      ...development.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }
  if (done.find((t) => t.todoId === targetId)) {
    updatedTodos.done = [
      ...done.filter((t) => t.todoId !== targetId),
      updatedElem,
    ];
  }

  return {
    state: {
      title,
      setTitle,
      description,
      setDescription,
      deadline,
      setDeadline,
    },
    updatedTodos,
    updatedElem,
  };
};

export default useUpdate;
