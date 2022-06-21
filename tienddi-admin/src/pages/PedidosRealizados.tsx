import { pedidos } from "../data/pedidos";
import CardPedidos from "../components/CardPedidos";

const PedidosRealizados = () => {
  return (
    <div className="p-5 barra h-auto lg:h-screen lg:overflow-y-scroll">
      <h2 className="text-center text-xl uppercase text-primary">
        - Pedidos realizados -
      </h2>
      <div className="home h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 p-5">
        {pedidos.map((pedido) => (
          <CardPedidos
            key={pedido.id}
            id={pedido.id}
            direccion={pedido.direccion}
            fecha={pedido.fecha}
          />
        ))}
      </div>
    </div>
  );
};

export default PedidosRealizados;
