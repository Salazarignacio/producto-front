import { Button } from "react-bootstrap";

export default function VentasPage({
  props,
  eliminarProducto,
  actualizarCantidad,
  actualizarPrecio,
}) {
  return (
    <div className="ticket-print">
      {props.map((a) => (
        <div key={a.codigo} className="carrito-container">
          <li className="no-print">{a.codigo}</li>
          <li>{a.articulo}</li>

          {/* Input que cambia valor manualmente */}
          <li>
            <span className="only-print">{a.cantidad}</span>
            <input
              className="no-print"
              type="number"
              min="1"
              value={a.cantidad}
              onChange={(e) =>
                actualizarCantidad(a.codigo, Number(e.target.value))
              }
            />
          </li>
            
          <li>
            <span className="only-print">{a.precio}</span>
            <input
              className="no-print"
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
              className="btn-edit no-print"
              onClick={() => eliminarProducto(a.codigo)}
            >
              Eliminar
            </Button>
          </li>
        </div>
      ))}
    </div>
  );
}
