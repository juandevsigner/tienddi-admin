import { IoIosArrowDroprightCircle } from "react-icons/io";

interface Props {
  pedido: string | number;
  direccion: string | number;
  fecha: string | number;
}

const PedidosButton = ({ pedido, direccion, fecha }: Props) => (
  <>
    <button
      type="button"
      className="p-5 flex w-full items-center justify-between gap-5 hover:shadow-lg rounded-xl"
    >
      <div className="text-left">
        <p className="font-semibold">{pedido}</p>
        <p className="text-sm text-gray-500">{direccion}</p>
        <p className="text-sm text-gray-400">{fecha}</p>
      </div>
      <div>
        <IoIosArrowDroprightCircle className="w-5 h-5 text-primary" />
      </div>
    </button>
    <hr />
  </>
);

export default PedidosButton;
