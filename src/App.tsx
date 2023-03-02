import { RouterProvider } from "react-router-dom";
import LoadingLayout from "./components/LoadingLayout";
import "./App.scss";
import { useAppSelector } from "./hooks/reduxHook";
import useRoutes from "./hooks/useRoutes";

function App() {
  const count = useAppSelector((store) => store.count);
  const router = useRoutes();
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
