import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoadingLayout from "./components/LoadingLayout";
import "./App.scss";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useAppSelector } from "./hooks/reduxHook";
import ListPage from "./pages/ListPage";
import MainLayout from "./layout/MainLayout";

function App() {
  const count = useAppSelector((store) => store.count);
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
  return (
    <>
      {count > 0 && <LoadingLayout />}
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
