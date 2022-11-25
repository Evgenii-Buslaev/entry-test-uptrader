import { Route, Routes } from "react-router-dom";

import ProjectsList from "../ProjectsList/ProjectsList";
import TodoList from "../TodoList/TodoList";
import Button from "../../UI/Button/Button";

const publicRoutes = [
  { title: "Проекты", path: "/projects", element: <ProjectsList /> },
  { title: "Задачи", path: "/todos", element: <TodoList /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
