import PedidosButton from "../components/PedidosButton";
import PedidosCard from "../components/PedidosCard";
import { pedidos } from "../data/pedidos";

const Home = () => {
  return (
    <div className="barra p-5  h-auto lg:h-screen lg:overflow-y-scroll">
      <h2 className="text-center mb-5 text-xl uppercase text-primary">
        - Resumen -
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 ">
        <div className="bg-white rounded-2xl ">
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
        <div className="bg-white rounded-2xl ">
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
        <div className="bg-white rounded-2xl ">
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
        <div className="bg-white rounded-2xl ">
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
    </div>
  );
};

export default Home;
