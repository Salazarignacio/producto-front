import { Button } from "react-bootstrap";
import printlogo from "../assets/printlogo.png";

export default function TicketPage({ total, items }) {
  const handlePrint = () => window.print();

  return (
    <div className="t-page">
      <div className="ticket-content">
        <h3 className="ticket-title">Resumen de Venta</h3>

        <div className="ticket-info">
          <div className="ticket-row">
            <span>Productos</span>
            <strong>{items}</strong>
          </div>

          <div className="ticket-row total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>
        </div>
      </div>

      <div className="ticket-actions">
        <Button className="btn-primary-soft w-100" onClick={handlePrint}>
          Confirmar <img src={printlogo} />
        </Button>

        <Button className="btn-edit w-100">Cancelar Venta</Button>
      </div>
    </div>
  );
}
