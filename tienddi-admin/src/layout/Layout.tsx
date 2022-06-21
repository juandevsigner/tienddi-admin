import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { BotonesFlotantes, Navbar, Sidebar } from "../components";

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
            menuActivo ? "w-full lg:w-2/5 xl:w-2/6" : "w-0"
          } h-screen transition-all duration-300 bg-gray-100 overflow-hidden ease-in-out`}
        >
          <Sidebar />
        </div>

        <div
          className={`${
            menuActivo ? "hidden md:block lg:w-3/5 xl:w-4/6" : "w-full"
          }`}
        >
          <Outlet />
        </div>
        <BotonesFlotantes />
      </div>
    </div>
  );
};

export default Layout;
