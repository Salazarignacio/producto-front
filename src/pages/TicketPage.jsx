import { Button } from "react-bootstrap";
import printlogo from "../assets/printlogo.png";
import cancel from "../assets/cancel.png";

export default function TicketPage({ total, items, setProductos }) {
  const handleCancelarVenta = () => {
    const ok = window.confirm("¿Cancelar la venta actual?");
    if (!ok) return;

    setProductos([]);
    localStorage.removeItem("productos");
  };
  const handlePrint = () => {
    window.print();
    setProductos([]);
    localStorage.removeItem("productos");
  };
  const now = new Date();
  const fechaFormateada = now.toLocaleDateString("es-AR");
  const hora = now.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const totalFormateado = total.toLocaleString("es-AR");

  return (
    <div className="t-page">
      <div className="ticket-content">
        <h3 className="ticket-title">Resumen de Venta</h3>

        <div className="ticket-info">
          <div className="ticket-row">
            <span>Vendedor</span>
            <strong>Ignacio</strong>
          </div>
          <div className="ticket-row">
            <span>Fecha</span>
            <strong>{fechaFormateada}</strong>
          </div>
          <div className="ticket-row">
            <span>Hora</span>
            <strong>{hora}</strong>
          </div>
          <div className="ticket-row">
            <span>Productos</span>
            <strong>{items}</strong>
          </div>

          <div className="ticket-row total">
            <span>Total</span>
            <strong>${totalFormateado}</strong>
          </div>
        </div>
      </div>

      <div className="ticket-actions">
        <Button className="btn-primary-soft w-100" onClick={handlePrint}>
          <img src={printlogo} />
        </Button>

        <Button className="btn-cancel w-100" onClick={handleCancelarVenta}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
