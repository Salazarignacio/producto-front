import { Button } from "react-bootstrap";

export default function TicketPage({ total, items }) {
  const handlePrint = () => window.print();
  return (
    <div className="t-page ">
      <h3>Resumen de Venta</h3>
      <li>Cantidad de productos: {items}</li>
      <li>Total ${total}</li>
      <div>
        <Button className="btn-edit  w-100" onClick={handlePrint}>
          Confirmar / Imprimir
        </Button>

        <Button className="btn-edit  w-100 ">Cancelar Venta</Button>
      </div>
    </div>
  );
}
