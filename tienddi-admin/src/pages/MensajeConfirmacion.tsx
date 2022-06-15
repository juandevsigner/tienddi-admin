import { Link } from "react-router-dom";
import Iso from "../img/TienddiIso.svg";

const MensajeConfirmacion = () => {
  return (
    <div className="bg-gradient-to-b gap-5 from-orangedeg  to-reddeg  h-screen flex flex-col justify-center items-center p-10">
      <img
        src={Iso}
        alt="Tienddi"
        className="mx-auto animate-bounce w-40 mb-6"
      />
      <h1 className=" text-4xl text-white text-center font-semibold">
        ¡Solicitud Aceptada!
      </h1>
      <p className="text-white text-center">
        Se ha envíado a su correo las instrucciones para cambiar la contraseña
      </p>
      <Link
        to={"/"}
        className=" text-primary hover:bg-yellowbg transition-colors bg-white py-2 px-5 rounded-full"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default MensajeConfirmacion;
