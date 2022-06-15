import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import Mensaje from "./Mensaje";
import Logo from "../img/TienddiLogo.svg";

const FormularioCambiarPass = () => {
  const navigate = useNavigate();
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ([passwordRepeat, password].includes("")) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 8) {
      setError(true);
      setMensaje("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (password !== passwordRepeat) {
      setError(true);
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    setError(false);
    navigate("/mensaje-nuevo-password");
  };

  return (
    <div className="bg-gradient-to-b from-orangedeg lg:mr-10  to-reddeg flex justify-center flex-col rounded-3xl shadow-lg w-full lg:w-1/3 p-10">
      <h1 className="text-white text-center font-semibold mb-3 text-2xl">
        Actualiza tu contraseña
      </h1>
      <p className="block font-light text-sm text-white text-center mb-3">
        Recuerda no compartir tu contraseña con nadie, guardala en un lugar
        seguro, así evitarás que alguien pueda acceder a tu información.
      </p>
      {error && <Mensaje mensaje={mensaje} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div className="relative">
            <input
              autoComplete="off"
              className="w-full focus:outline-none text-white border-orange-400 py-2 px-3 placeholder:text-gray-100  placeholder:font-light mb-2 bg-transparent border-b"
              type="password"
              placeholder="Ingrese su Nueva Contraseña Aquí"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 items-center flex mb-2">
              <FaEyeSlash className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="relative mb-5">
          <div>
            <input
              className="w-full p-2 text-white focus:outline-none border-orange-400 placeholder:text-gray-100 py-2 px-3   placeholder:font-light mb-2 bg-transparent border-b"
              autoComplete="off"
              type="password"
              placeholder="Ingresa Nuevamente su Contraseña"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </div>
          <div className="absolute inset-y-0 right-0 items-center flex mb-2">
            <FaEyeSlash className="text-white w-5 h-5" />
          </div>
        </div>

        <input
          className="bg-yellow-500 w-full mb-5 rounded-full uppercase  text-white p-2 cursor-pointer hover:bg-yellow-600 transition-colors"
          type="submit"
          value="Actualizar Contraseña"
        />
        <img src={Logo} alt="Tienddi" className="mx-auto w-40" />
      </form>
    </div>
  );
};

export default FormularioCambiarPass;
