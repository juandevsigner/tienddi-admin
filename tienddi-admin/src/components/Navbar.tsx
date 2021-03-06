import Logo from "../img/TienddiLogo.svg";
import { FiLogOut } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";
import { CgClose } from "react-icons/cg";
import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
  const { setMenuActivo, menuActivo } = useStateContext();

  return (
    <div className="bg-primary w-full py-4 px-7 shadow-lg ">
      <div className="flex items-center justify-between">
        <button
          className="bg-orange-100 p-2 rounded-full text-primary hover:shadow-lg"
          type="button"
          onClick={() => setMenuActivo(!menuActivo)}
        >
          {menuActivo ? <CgClose /> : <RiMenu5Line />}
        </button>

        <img className="h-8" src={Logo} alt="tienddi" />
        <button className="text-white flex items-center gap-3" type="button">
          <FiLogOut />
          <span className="hidden md:block">Cerrar Sesion</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
