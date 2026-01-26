import Loading from "./Loading";
import EditProductoPage from "./EditProductoPage";
import ModalCreate from "../components/ModalCreate.jsx";

export default function EditPage({ productos, searchCode }) {
  return (
    <div className="edit-page">
      <div className="searchBar">
        <input
          onChange={searchCode}
          className="search-input"
          placeholder="Código producto"
        ></input>
<ModalCreate/>
        
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
