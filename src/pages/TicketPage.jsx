import { Button } from "react-bootstrap";

export default function TicketPage({ total, items }) {
  const handlePrint = () => window.print();
  return (
    <div className="t-page ">
      <h3>Resumen de Venta</h3>
      <li>Cantidad de productos: {items}</li>
      <li>Total ${total}</li>
      <div>
        <Button onClick={handlePrint}>Confirmar / Imprimir</Button>
        <Button>Cancelar Venta</Button>
      </div>
    </div>
  );
}
