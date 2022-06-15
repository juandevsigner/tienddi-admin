import { Outlet } from "react-router-dom";
import bgImage from "../img/loginBg.webp";

const LayoutLogin = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-100 to-amber-200 h-screen flex justify-between items-center p-10">
      <div>
        <img
          className="mix-blend-multiply absolute bottom-0 left-0 w-2/5 hidden lg:block"
          src={bgImage}
          alt="Tienddi"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutLogin;
