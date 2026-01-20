import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Product POS</h1>
      <div>
        <Button><Link to={"/ventas"}>Ventas</Link></Button>
        <Button><Link to={"/edicion"}>Edicion</Link></Button>
        <Button>Caja</Button>
      </div>
    </>
  );
}
