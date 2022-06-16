import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";

const Layout = () => {
  const { menuActivo } = useStateContext();
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex">
        <div
          className={`${
            menuActivo ? "w-full md:w-1/5" : "w-0"
          } transition-all duration-300  overflow-hidden ease-in-out`}
        >
          <Sidebar />
        </div>
        <div className={`${menuActivo ? "w-0 md:w-4/5" : "w-full"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
