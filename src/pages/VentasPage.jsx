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
        
          <li>{a.articulo}</li>

          {/* Input que cambia valor manualmente */}

          <li>
            <span className="only-print">
              {a.precio.toLocaleString("es-AR")}
            </span>

            <input
              className="no-print sell-input"
              type="text"
              value={a.precio ? `$ ${a.precio.toLocaleString("es-AR")}` : ""}
              onChange={(e) => {
                // quitamos todo lo que no sea número
                const soloNumeros = e.target.value.replace(/\D/g, "");

                actualizarPrecio(
                  a.codigo,
                  soloNumeros ? Number(soloNumeros) : 0,
                );
              }}
            />
          </li>

          <li>
            <span className="only-print">{a.cantidad}</span>
            <input
              className="no-print sell-input"
              type="number"
              min="1"
              value={a.cantidad}
              onChange={(e) =>
                actualizarCantidad(a.codigo, Number(e.target.value))
              }
            />
          </li>
          <li className="no-print">${a.precio * a.cantidad}</li>
          <li>
            <Button
              className="btn-edit no-print"
              onClick={() => eliminarProducto(a.codigo)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </Button>
          </li>
        </div>
      ))}
    </div>
  );
}
