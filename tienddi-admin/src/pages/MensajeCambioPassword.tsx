import { Link } from "react-router-dom";
import Iso from "../img/TienddiIso.svg";

const MensajeCambioPassword = () => {
  return (
    <div className="bg-gradient-to-b gap-5 from-orangedeg  to-reddeg  h-screen flex flex-col justify-center items-center p-10">
      <img
        src={Iso}
        alt="Tienddi"
        className="mx-auto w-40 mb-6 animate-bounce"
      />
      <h1 className=" text-4xl text-white text-center font-semibold">
        ¡Se Actualizo Correctamente su Contraseña!
      </h1>
      <p className="text-white text-center">
        Ahora puedes iniciar sesión con tu nueva contraseña.
      </p>
      <Link
        to={"/"}
        className="text-primary hover:bg-yellowbg transition-colors bg-white py-2 px-5 rounded-full"
      >
        Iniciar Sesión
      </Link>
    </div>
  );
};

export default MensajeCambioPassword;
