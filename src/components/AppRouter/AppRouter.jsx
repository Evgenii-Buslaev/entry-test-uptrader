import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import ProjectsList from "../ProjectsList/ProjectsList";
import TodoList from "../TodoList/TodoList";

const publicRoutes = [
  { title: "Главная", path: "/", element: <Home /> },
  { title: "Проекты", path: "/projects", element: <ProjectsList /> },
  { title: "Задачи", path: "/todos", element: <TodoList /> },
  { title: "Задачи", path: "/:id", element: <TodoList /> },
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
