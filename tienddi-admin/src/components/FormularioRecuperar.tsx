import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import Mensaje from "./Mensaje";
import Logo from "../img/TienddiLogo.svg";

const FormularioRecuperar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ([email].includes("")) {
      setError(true);
      setMensaje("Ingresa un email por favor");
      return;
    }
    setError(false);
    navigate("/mensaje-instrucciones");
  };

  return (
    <div className="bg-gradient-to-b from-orangedeg lg:mr-10  to-reddeg flex justify-center flex-col rounded-3xl shadow-lg w-full lg:w-1/3 p-10">
      <h1 className="text-white text-center font-semibold text-2xl mb-3">
        Recuperar Cuenta
      </h1>
      <p className="text-center mb-5 text-white">
        Ingresa tu Email para enviarte las instrucciones de cambio de contraseña
      </p>
      {error && <Mensaje mensaje={mensaje} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div className="relative">
            <input
              className="w-full focus:outline-none text-white border-orange-400 py-2 px-3 placeholder:text-gray-100  placeholder:font-light  bg-transparent border-b"
              id="email"
              type="email"
              placeholder="Ingrese su Email Aquí"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 items-center flex mb-2">
              <HiMail className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
        <input
          className="bg-yellow-500 w-full mt-2 mb-5 rounded-full uppercase  text-white p-2 cursor-pointer hover:bg-yellow-600 transition-colors"
          type="submit"
          value="Envíar Instrucciones"
        />

        <img src={Logo} alt="Tienddi" className="mx-auto w-40" />
      </form>
    </div>
  );
};

export default FormularioRecuperar;
