import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { RiHome3Line } from "react-icons/ri";
import { BiCommentError } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BsBagX } from "react-icons/bs";

const Sidebar = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const { menuActivo } = useStateContext();

  return (
    <div className="w-full">
      {menuActivo && (
        <div className="flex flex-col px-10 gap-5 pt-10">
          <Link
            className={`${
              urlActual === "/administrador" && "text-white bg-primary"
            } flex justify-between items-center py-3 px-3 rounded-full`}
            to={"/administrador"}
          >
            Inicio
            <RiHome3Line className="w-5 h-5" />
          </Link>

          <hr />

          <Link
            className={`${
              urlActual === "/administrador/pedidos-realizados" &&
              "text-white bg-primary"
            } flex justify-between items-center py-3 px-3 rounded-full`}
            to={"/administrador/pedidos-realizados"}
          >
            Pedidos Realizados
            <BsBagCheck className="w-5 h-5" />
          </Link>

          <hr />

          <Link
            className={`${
              urlActual === "/administrador/pedidos-cancelados" &&
              "text-white bg-primary"
            } flex justify-between items-center py-3 px-3 rounded-full`}
            to={"/administrador/pedidos-cancelados"}
          >
            Pedidos Cancelados
            <BsBagX className="w-5 h-5" />
          </Link>

          <hr />

          <Link
            className={`${
              urlActual === "/administrador/reclamos" && "text-white bg-primary"
            } flex justify-between items-center py-3 px-3 rounded-full`}
            to={"/administrador/reclamos"}
          >
            Quejas y Reclamos
            <BiCommentError className="w-5 h-5" />
          </Link>

          <hr />

          <Link
            className={`${
              urlActual === "/administrador/configuracion" &&
              "text-white bg-primary"
            } flex justify-between items-center py-3 px-3 rounded-full`}
            to={"/administrador/configuracion"}
          >
            Configuración
            <AiOutlineSetting className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
