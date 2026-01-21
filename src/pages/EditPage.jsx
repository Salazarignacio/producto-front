import { Button } from "react-bootstrap";
import Loading from "./Loading";
import { Link, NavLink } from "react-router-dom";
import DeleteProductoBDC from "../components/DeleteProductBDC";
import EditProductoPage from "./EditProductoPage";

export default function EditPage({ productos, searchCode }) {
  return (
    <div className="edit-page">
      <input onChange={searchCode}></input>
      <Link to={"/create"}>
        <Button>Producto Nuevo</Button>
      </Link>
      {!productos ? (
        <Loading />
      ) : productos.length > 1 ? (
        productos.map((element, a) => {
          return (
            <div key={a}>
              <EditProductoPage props={element}></EditProductoPage>
            </div>
          );
        })
      ) : (
        <EditProductoPage props={productos}></EditProductoPage>
      )}
    </div>
  );
}
