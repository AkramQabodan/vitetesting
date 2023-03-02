import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./MainLayout.scss";
const MainLayout = () => {
  return (
    <div className="mainlayoutcontainer">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
