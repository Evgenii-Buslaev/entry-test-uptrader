import { useState } from "react";
import { calculateDates } from "../handlers/calculateDates";

const useUpdate = (todo, targetId) => {
  const { id, queue, development, done } = todo;

  const targetElem =
    queue.find((t) => t.todoId === targetId) ||
    development.find((t) => t.todoId === targetId) ||
    done.find((t) => t.todoId === targetId);

  const [title, setTitle] = useState(targetElem.title);
  const [description, setDescription] = useState(targetElem.description);
  const [deadline, setDeadline] = useState(targetElem.deadline || "");
  const [importance, setImportance] = useState(targetElem.importance || "");
  const [files, setFiles] = useState(targetElem.files || "");

  const updatedElem = {
    id: id,
    number: targetElem.number,
    todoId: targetId,
    title: title,
    description: description,
    created: targetElem.created,
    deadline: deadline,
    inWork: `${
      calculateDates(targetElem.created) > 1
        ? calculateDates(targetElem.created) + " days"
        : calculateDates(targetElem.created) + " day"
    }`,
    importance: importance,
    files: files,
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
      importance,
      setImportance,
      files,
      setFiles,
    },
    targetElem,
    updatedTodos,
    updatedElem,
  };
};

export default useUpdate;
