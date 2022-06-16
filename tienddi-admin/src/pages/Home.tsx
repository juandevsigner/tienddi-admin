import PedidosButton from "../components/PedidosButton";
import PedidosCard from "../components/PedidosCard";
import { pedidos } from "../data/pedidos";

const Home = () => {
  return (
    <>
      <div className="home h-auto lg:h-screen lg:overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 p-5">
        <div className="bg-gray-100 rounded-2xl shadow-lg">
          <PedidosCard
            titulo={"Pendientes"}
            cantidad={pedidos.length}
            clases={"bg-red-600  shadow-lg rounded-t-2xl"}
          />
          {pedidos.map((pedido) => (
            <PedidosButton
              key={pedido.id}
              pedido={pedido.id}
              fecha={pedido.fecha}
              direccion={pedido.direccion}
            />
          ))}
        </div>
        <div className="bg-gray-100 rounded-2xl shadow-lg">
          <PedidosCard
            titulo={"Preparando"}
            cantidad={pedidos.length}
            clases={"bg-primary  shadow-lg rounded-t-2xl"}
          />
          {pedidos.map((pedido) => (
            <PedidosButton
              key={pedido.id}
              pedido={pedido.id}
              fecha={pedido.fecha}
              direccion={pedido.direccion}
            />
          ))}
        </div>
        <div className="bg-gray-100 rounded-2xl shadow-lg">
          <PedidosCard
            titulo={"Despachados"}
            cantidad={pedidos.length}
            clases={"bg-yellow-500  shadow-lg rounded-t-2xl"}
          />
          {pedidos.map((pedido) => (
            <PedidosButton
              key={pedido.id}
              pedido={pedido.id}
              fecha={pedido.fecha}
              direccion={pedido.direccion}
            />
          ))}
        </div>
        <div className="bg-gray-100 rounded-2xl shadow-lg">
          <PedidosCard
            titulo={"Finalizados"}
            cantidad={pedidos.length}
            clases={"bg-lime-500  shadow-lg rounded-t-2xl"}
          />
          {pedidos.map((pedido) => (
            <PedidosButton
              key={pedido.id}
              pedido={pedido.id}
              fecha={pedido.fecha}
              direccion={pedido.direccion}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
