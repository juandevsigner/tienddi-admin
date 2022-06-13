import React from "react";

const Formulario = () => {
  return (
    <div className="bg-orange-600 flex justify-center flex-col rounded-lg shadow-lg w-full md:w-1/3 p-5">
      <h1 className="text-white text-center font-semibold text-4xl">
        ¡Bienvendo!
      </h1>
      <p className="text-center text-white">
        Aquí puedes gestionar todos los pedidos de tu tienda en vivo y sin
        retrasos.
      </p>
      <form>
        <div>
          <label
            className="text-white block mb-2 font-semibold text-sm"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 placeholder:text-gray-100 placeholder:font-light mb-2 bg-transparent border-b-2"
            id="email"
            type="text"
            placeholder="Ingrese su Email"
          />
        </div>
        <div>
          <label
            className="block text-white mb-2 font-semibold text-sm"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="w-full p-2 placeholder:text-gray-100 placeholder:font-light mb-2 bg-transparent border-b-2"
            id="password"
            autoComplete="off"
            type="password"
            placeholder="Ingrese su Contraseña"
          />
          <input
            className="bg-yellow-500 w-full my-5 rounded-full uppercase text-white p-2 cursor-pointer hover:bg-yellow-600 transition-colors"
            type="submit"
            value="Iniciar Sesión"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
