import SearchIndex from "../reutilizable/SearchIndex";
import { useState, useEffect } from "react";
import { getByCode, test } from "../api/ProductoService";
import VentasPage from "../pages/VentasPage";
import "../style/Style-ventas.css";
import TicketComponent from "./TicketComponent";

export default function VentasComponent({}) {
  const [productos, setProductos] = useState(() => {
    const guardados = localStorage.getItem("productos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const searchCode = async (code) => {
    if (!code) return;

    const data = await getByCode(code);

    if (data) {
      setProductos((prev) => {
        const existe = prev.find((p) => p.codigo == data.codigo);

        if (existe) {
          return prev.map((p) =>
            p.codigo === data.codigo ? { ...p, cantidad: p.cantidad + 1 } : p,
          );
        }

        return [...prev, { ...data, cantidad: 1 }];
      });
    }
  };

  const eliminarProducto = (codigo) => {
    setProductos((prev) => prev.filter((p) => p.codigo !== codigo));
  };

  const actualizarCantidad = (codigo, nuevaCantidad) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.codigo === codigo ? { ...p, cantidad: nuevaCantidad } : p,
      ),
    );
  };

  const actualizarPrecio = (codigo, nuevoPrecio) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.codigo === codigo ? { ...p, precio: nuevoPrecio } : p,
      ),
    );
  };

  return (
    <div>
      {/* <h2>Ventas</h2> */}
      <div className="ventas-container">
        <div className="productos-ventas">
          <SearchIndex searchCode={searchCode}></SearchIndex>
          {!productos ? (
            "Ingrese Procuto"
          ) : (
            <>
              <div className="carrito-titulos">
                <span>Codigo</span>
                <span>Nombre</span>
                <span>Cantidad</span>
                <span>Precio Unitario</span>
                <span>Subtotal</span>
                <span></span>
              </div>
              <VentasPage
                props={productos}
                eliminarProducto={eliminarProducto}
                actualizarCantidad={actualizarCantidad}
                actualizarPrecio={actualizarPrecio}
              ></VentasPage>
            </>
          )}
        </div>
        <div className="ticket-ventas">
          <TicketComponent prods={productos} />
        </div>
      </div>
    </div>
  );
}
