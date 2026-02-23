import { Button } from "react-bootstrap";

export default function VentasPage({
  props,
  eliminarProducto,
  actualizarCantidad,
  actualizarPrecio,
}) {

  const total = props.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="ticket-print">

      {/* 🔝 Título */}
      <div className="ticket-title only-print">
        <h4>*** RESUMEN ***</h4>
      </div>

      {props.map((a) => (
        <div key={a.codigo} className="carrito-container">
          <div>{a.articulo}</div>

          <div>
            <span className="only-print">
              {a.precio.toLocaleString("es-AR")}
            </span>

            <input
              className="no-print sell-input"
              type="text"
              value={a.precio ? `$ ${a.precio.toLocaleString("es-AR")}` : ""}
              onChange={(e) => {
                const soloNumeros = e.target.value.replace(/\D/g, "");

                actualizarPrecio(
                  a.codigo,
                  soloNumeros ? Number(soloNumeros) : 0
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                }
              }}
            />
          </div>

          <div>
            <span className="only-print">
              {a.cantidad.toLocaleString("es-AR")}
            </span>

            <input
              className="no-print sell-input-cantidad"
              type="text"
              inputMode="numeric"
              value={a.cantidad ? a.cantidad.toLocaleString("es-AR") : ""}
              onChange={(e) => {
                const soloNumeros = e.target.value.replace(/\D/g, "");

                actualizarCantidad(
                  a.codigo,
                  soloNumeros ? Math.max(1, Number(soloNumeros)) : 1
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                }
              }}
            />
          </div>

          <div className="no-print sell-input-subtotal">
            ${(a.precio * a.cantidad).toLocaleString("es-AR")}
          </div>

          <div>
            <Button
              className="btn-edit no-print"
              onClick={() => eliminarProducto(a.codigo)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </Button>
          </div>
        </div>
      ))}

      {/* 🔽 Total */}
      <div className="ticket-total only-print">
        <h5> ****************** TOTAL: ${total.toLocaleString("es-AR")}</h5>
      </div>

    </div>
  );
}