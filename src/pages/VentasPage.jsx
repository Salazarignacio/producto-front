import { Button } from "react-bootstrap";

export default function VentasPage({
  props,
  eliminarProducto,
  actualizarCantidad,
  actualizarPrecio,
}) {
  return (
    <>
      {props.map((a) => (
        <div key={a.codigo} className="carrito-container">
          <li>{a.codigo}</li>
          <li>{a.articulo}</li>

          {/* Input que cambia valor manualmente */}
          <li>
            <input
              type="number"
              min="1"
              value={a.cantidad}
              onChange={(e) =>
                actualizarCantidad(a.codigo, Number(e.target.value))
              }
            />
          </li>
          <li>
            <input
              type="number"
              value={a.precio}
              onChange={(e) =>
                actualizarPrecio(a.codigo, Number(e.target.value))
              }
            />
          </li>
          <li>${a.precio * a.cantidad}</li>
          <li>
            <Button
              className="btn-edit"
              onClick={() => eliminarProducto(a.codigo)}
            >
              Eliminar
            </Button>
          </li>
        </div>
      ))}
    </>
  );
}
