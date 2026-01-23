import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DeleteProductoBDC from "../components/DeleteProductBDC.jsx";

export default function EditProductoPage({ props }) {
  return (
    <>
      <li>
        {props.codigo} - {props.articulo} - ${props.precio} - {props.stock}{" "}
        <NavLink to={`/update/${props.id}`}>
          <Button>Editar</Button>
        </NavLink>{" "}
        <Link>
          <DeleteProductoBDC id={props.id}></DeleteProductoBDC>
        </Link>
      </li>
    </>
  );
}
