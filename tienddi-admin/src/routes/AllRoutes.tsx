import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  PedidosCancelados,
  PedidosRealizados,
  RecuperarCuenta,
} from "../pages";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecuperarCuenta />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pedidos-cancelados" element={<PedidosCancelados />} />
        <Route path="/pedidos-realizados" element={<PedidosRealizados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
