import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Sidebar />
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Layout;
