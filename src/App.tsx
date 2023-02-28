import { Outlet } from "react-router-dom";
import LoadingLayout from "./components/LoadingLayout";
import { useAppSelector } from "./state/hooks";
import "./App.css";

function App() {
  const count = useAppSelector((store) => store.count);
  return (
    <>
      {count > 0 && <LoadingLayout />}
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
