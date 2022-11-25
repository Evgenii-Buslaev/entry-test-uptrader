import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import ProjectsList from "../ProjectsList/ProjectsList";
import TodoList from "../TodoList/TodoList";

const publicRoutes = [
  { title: "Проекты", path: "/", element: <Home /> },
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
