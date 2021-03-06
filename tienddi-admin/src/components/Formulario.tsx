import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { FaEyeSlash } from "react-icons/fa";
import Mensaje from "./Mensaje";
import Logo from "../img/TienddiLogo.svg";

const Formulario = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    setError(false);
    navigate("/administrador");
  };

  return (
    <div className="bg-gradient-to-b from-orangedeg  to-reddeg flex justify-center flex-col rounded-3xl lg:mr-10 shadow-lg w-full lg:w-1/3 p-10">
      <h1 className="text-white text-center font-semibold text-4xl mb-3">
        ¡Bienvenid@!
      </h1>
      <p className="text-center mb-5 text-white">
        Aquí puedes gestionar todos los pedidos de tu tienda en vivo y sin
        retrasos.
      </p>
      {error && <Mensaje mensaje={mensaje} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <div className="relative">
            <input
              className="w-full focus:outline-none text-white border-orange-400 py-2 px-3 placeholder:text-gray-100  placeholder:font-light mb-2 bg-transparent border-b"
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
        <div className="relative mb-5">
          <div>
            <input
              className="w-full p-2 text-white focus:outline-none border-orange-400 placeholder:text-gray-100 py-2 px-3   placeholder:font-light mb-2 bg-transparent border-b"
              id="password"
              autoComplete="off"
              type="password"
              placeholder="Ingrese su Contraseña Aquí"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="absolute inset-y-0 right-0 items-center flex mb-2">
            <FaEyeSlash className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="flex mt-3 flex-col items-center">
          <div className="flex items-center mb-2  gap-2">
            <input type="checkbox" value="Recuerdame" />
            <p className="text-white ">Recordarme</p>
          </div>
          <Link
            to={"/recuperar"}
            className="text-white text-center underline hover:text-gray-300"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <input
          className="bg-yellow-500 w-full my-5 rounded-full uppercase  text-white p-2 cursor-pointer hover:bg-yellow-600 transition-colors"
          type="submit"
          value="Iniciar Sesión"
        />

        <img src={Logo} alt="Tienddi" className="mx-auto w-40" />
      </form>
    </div>
  );
};

export default Formulario;
