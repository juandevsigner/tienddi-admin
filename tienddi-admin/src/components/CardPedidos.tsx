import { AiFillEye } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";

interface CardPedidosProps {
  id: number;
  direccion: string | number;
  fecha: string | number;
}

const CardPedidos = ({ id, direccion, fecha }: CardPedidosProps) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl delay-100 transition-shadow">
      <p className="font-semibold text-slate-700 flex flex-col mb-2">
        Pedido:
        <hr /> <span className="text-gray-500 font-normal">{id}</span>{" "}
      </p>
      <p className="font-semibold text-slate-700 flex flex-col mb-2">
        Direccion: <hr />
        <span className="text-gray-500 font-normal ">{direccion}</span>{" "}
      </p>
      <p className="font-semibold text-slate-700 flex flex-col mb-2">
        Fecha y Hora: <hr />
        <span className="text-gray-500 font-normal">{fecha}</span>{" "}
      </p>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="bg-primary hover:bg-orange-600 flex items-center rounded-full justify-between gap-2 text-white py-2 px-4 transition-colors delay-75 duration-500 ease-in-out"
        >
          Ver
          <AiFillEye />
        </button>
        <button
          type="button"
          className=" flex items-center rounded-full justify-between gap-2 text-red-500 py-2 px-4 hover:bg-red-100 transition-colors delay-75 duration-500 ease-in-out"
        >
          Eliminar
          <TbTrash />
        </button>
      </div>
    </div>
  );
};

export default CardPedidos;
