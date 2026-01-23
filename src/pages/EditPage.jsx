import { Button } from "react-bootstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import EditProductoPage from "./EditProductoPage";

export default function EditPage({ productos, searchCode }) {
  return (
    <div className="edit-page">
      <div className="searchBar">
        <input onChange={searchCode} className="search-input" placeholder="Código producto"></input>
        <Link to={"/create"}>
          <Button className="btn-new">+ Producto Nuevo</Button>
        </Link>
      </div>
      <div className="productos-edit">
        {!productos ? (
          <Loading />
        ) : productos.length > 1 ? (
          productos.map((element, a) => {
            return (
              <div key={a} className="producto-ind">
                <EditProductoPage props={element}></EditProductoPage>
              </div>
            );
          })
        ) : (
          <div className="productos-edit">
            <EditProductoPage props={productos}></EditProductoPage>
          </div>
        )}
      </div>
    </div>
  );
}
