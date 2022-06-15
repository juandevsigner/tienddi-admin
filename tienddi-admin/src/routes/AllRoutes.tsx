import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import LayoutLogin from "../layout/LayoutLogin";
import {
  FormularioCambiarPass,
  FormularioRecuperar,
  Formulario,
} from "../components";

import {
  Home,
  PedidosCancelados,
  PedidosRealizados,
  MensajeCambioPassword,
  MensajeConfirmacion,
} from "../pages";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutLogin />}>
          <Route index element={<Formulario />} />
          <Route path="recuperar" element={<FormularioRecuperar />} />
          <Route path="cambiar-password" element={<FormularioCambiarPass />} />
        </Route>

        <Route
          path="/mensaje-instrucciones"
          element={<MensajeConfirmacion />}
        />

        <Route
          path="/mensaje-nuevo-password"
          element={<MensajeCambioPassword />}
        />

        <Route path="/administrador" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pedidos-cancelados" element={<PedidosCancelados />} />
          <Route path="pedidos-realizados" element={<PedidosRealizados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
