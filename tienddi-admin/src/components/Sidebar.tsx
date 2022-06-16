import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { RiHome3Line } from "react-icons/ri";
import { BiCommentError } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  const { menuActivo } = useStateContext();

  return (
    <div className="w-full bg-gray-100 h-screen">
      {menuActivo && (
        <div className="flex flex-col px-10 gap-5 pt-10">
          <Link
            className="flex justify-between bg-primary rounded-full text-white px-3 py-2"
            to={"/administrador"}
          >
            Inicio
            <RiHome3Line className="text-xl" />
          </Link>
          <hr />
          <Link
            className="flex justify-between px-3 py-2"
            to={"/administrador/pedidos-realizados"}
          >
            Pedidos Realizados
            <RiHome3Line className="text-xl" />
          </Link>
          <hr />
          <Link
            className="flex justify-between px-3 py-2"
            to={"/administrador/pedidos-cancelados"}
          >
            Pedidos Cancelados
            <RiHome3Line className="text-xl" />
          </Link>
          <hr />
          <Link
            className="flex justify-between px-3 py-2"
            to={"/administrador/reclamos"}
          >
            Quejas y Reclamos
            <BiCommentError className="text-xl" />
          </Link>
          <hr />
          <Link
            className="flex justify-between px-3 py-2"
            to={"/administrador/configuracion"}
          >
            Configuración
            <AiOutlineSetting className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
