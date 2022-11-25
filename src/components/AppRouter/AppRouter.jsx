import { Route } from "react-router-dom";

const publicRoutes = [
  { title: "Проекты", path: "/projects" },
  { title: "Задачи", path: "/todos" },
];

const AppRouter = () => {
  return (
    <>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </>
  );
};

export default AppRouter;
