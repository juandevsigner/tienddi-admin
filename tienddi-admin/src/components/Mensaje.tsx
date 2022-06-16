import { BiError } from "react-icons/bi";

interface Props {
  mensaje: string;
}

const Mensaje = ({ mensaje }: Props) => {
  return (
    <div className="bg-red-800 p-1 mb-5 flex justify-center rounded-full items-center gap-2">
      <span className="text-white">
        <BiError />
      </span>
      <p className="text-white uppercase text-sm text-center">{mensaje}</p>
      <span className="text-white">
        <BiError />
      </span>
    </div>
  );
};

export default Mensaje;
