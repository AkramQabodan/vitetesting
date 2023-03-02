import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import { useAppSelector } from "./reduxHook";

const useRoutes = () => {
  const loggedIn = useAppSelector((store) => store.enableLogin);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: "list", element: <ListPage /> },
      ],
    },
    {
      path: "/login",
      element: loggedIn ? <LoginPage /> : <Navigate to={"/"} />,
    },
  ]);
  return router;
};
export default useRoutes;
