import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DeleteProductoBDC from "../components/DeleteProductBDC.jsx";

export default function EditProductoPage({ props }) {
  return (
    <ul className="productos-edit">
      <li className="producto-row">
        <span className="codigo">{props.codigo}</span>
        <span className="nombre">{props.articulo}</span>
        <span className="precio">${props.precio}</span>
        <span className="stock">{props.stock}</span>

        <div className="prod-edit-btn">
          <NavLink to={`/update/${props.id}`}>
            <Button className="btn-edit">Editar</Button>
          </NavLink>

          <DeleteProductoBDC id={props.id} />
        </div>
      </li>
    </ul>
  );
}
