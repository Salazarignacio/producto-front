import SearchIndex from "../reutilizable/SearchIndex";
import { useState, useEffect } from "react";
import { getByCode } from "../api/ProductoService";
import VentasPage from "../pages/VentasPage";
import "../style/Style-ventas.css";

export default function VentasComponent({}) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    console.log(productos);
  }, [productos]);

  const searchCode = async (e) => {
    const code = e.target.value;
    let data;
    if (code) {
      data = await getByCode(code);
    }
    if (data) {
      setProductos((prevProductos) => {
        const productoExistente = prevProductos.find(
          (p) => p.codigo === data.codigo
        );

        if (productoExistente) {
          return prevProductos.map((p) =>
            p.codigo === data.codigo ? { ...p, cantidad: p.cantidad + 1 } : p
          );
        } else {
          return [...prevProductos, { ...data, cantidad: 1 }];
        }
      });
    }
  };

  const eliminarProducto = (codigo) => {
    console.log(codigo);

    setProductos((prevProductos) =>
      prevProductos.filter((p) => p.codigo !== codigo)
    );
  };

  return (
    <div>
      <h2>Ventas</h2>
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
                <span>Eliminar</span>
              </div>
              <VentasPage
                props={productos}
                eliminarProducto={eliminarProducto}
              ></VentasPage>
            </>
          )}
        </div>
        <div className="ticket-ventas">Otro Componente</div>
      </div>
    </div>
  );
}
