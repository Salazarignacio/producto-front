import { Button } from "react-bootstrap";
import printlogo from "../assets/printlogo.png"

export default function TicketPage({ total, items }) {
  const handlePrint = () => window.print();
  return (
    <div className="t-page ">
      <h3>Resumen de Venta</h3>
      <li>Cantidad de productos: {items}</li>
      <li>Total ${total}</li>
      <div>
        <Button className="btn-primary-soft  w-100" onClick={handlePrint}>
          Confirmar <img src={printlogo}></img>
        </Button>

        <Button className="btn-edit  w-100 ">Cancelar Venta</Button>
      </div>
    </div>
  );
}
