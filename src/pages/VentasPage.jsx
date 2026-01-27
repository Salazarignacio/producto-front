import { Button } from "react-bootstrap";

export default function VentasPage({
  props,
  eliminarProducto,
  actualizarCantidad,
}) {
  return (
    <>
      {props.map((a) => (
        <div key={a.codigo} className="carrito-container">
          <li>{a.codigo}</li>
          <li>{a.articulo}</li>
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
          <li>${a.precio}</li>
          <li>${a.precio * a.cantidad}</li>
          <li>
            <Button onClick={() => eliminarProducto(a.codigo)}>Eliminar</Button>
          </li>
        </div>
      ))}
    </>
  );
}
