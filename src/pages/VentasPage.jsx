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
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                }
              }}
            />
            
          </li>

          <li>
            <span className="only-print">
              {a.cantidad.toLocaleString("es-AR")}
            </span>

            <input
              className="no-print sell-input"
              type="text"
              inputMode="numeric"
              value={a.cantidad ? a.cantidad.toLocaleString("es-AR") : ""}
              onChange={(e) => {
                const soloNumeros = e.target.value.replace(/\D/g, "");

                actualizarCantidad(
                  a.codigo,
                  soloNumeros ? Math.max(1, Number(soloNumeros)) : 1,
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                }
              }}
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
