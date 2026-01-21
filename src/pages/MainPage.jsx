import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Style.css"

export default function MainPage() {
  return (
    <div className="main-page">
      <h1>Product POS</h1>
      <div className="botones">
        <Button><Link to={"/ventas"}>Ventas</Link></Button>
        <Button><Link to={"/edicion"}>Edicion</Link></Button>
        <Button><Link to={""}>Caja</Link></Button>
      </div>
    </div>
  );
}
