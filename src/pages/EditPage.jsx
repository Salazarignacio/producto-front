import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link, NavLink } from "react-router-dom";
import DeleteProductoBDC from "../components/DeleteProductBDC";

export default function EditPage({ productos }) {
  console.log(productos);
  let loading = (
    <div className="d-flex justify-content-center p-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
  return (
    <>
      <Link to={"/create"}><Button>Producto Nuevo</Button></Link>
      {!productos
        ? loading
        : productos.map((element, a) => {
            return (
              <div key={a}>
                <li>
                  {element.codigo} - {element.articulo} - ${element.precio} -{" "}
                  {element.stock}{" "}
                  <NavLink to={`/update/${element.id}`}>
                    <Button>Editar</Button>
                  </NavLink>{" "}
                  <Link>
                    <DeleteProductoBDC id={element.id}></DeleteProductoBDC>
                  </Link>
                </li>
              </div>
            );
          })}
    </>
  );
}
