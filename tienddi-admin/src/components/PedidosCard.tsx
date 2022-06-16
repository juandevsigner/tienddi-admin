interface Props {
  titulo: string;
  cantidad: number;
  clases: string;
}

const PedidosCard = ({ titulo, cantidad, clases }: Props) => {
  return (
    <div className={clases}>
      <h2 className="upercase font-semibold text-center   text-xl text-white">
        {titulo} <span>( {cantidad} )</span>
      </h2>
    </div>
  );
};

export default PedidosCard;
