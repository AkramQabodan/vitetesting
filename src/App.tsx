import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoadingLayout from "./components/LoadingLayout";
import { useAppSelector } from "./state/hooks";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const count = useAppSelector((store) => store.count);
  const loggedIn = useAppSelector((store) => store.enableLogin);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: loggedIn ? <LoginPage /> : <Navigate to={'/'} />,
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
