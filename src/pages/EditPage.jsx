import Loading from "../reutilizable/Loading.jsx";
import EditProductoPage from "./EditProductoPage";
import ModalCreate from "../components/ModalCreate.jsx";
import "../style/Style.css";

export default function EditPage({ productos, searchCode }) {
  return (
    <div className="edit-page">
      <div className="searchBar">
        <input
          onChange={searchCode}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          className="search-input"
          placeholder="Código producto"
        />

        <ModalCreate />
      </div>

      <div className="">
        {!productos ? (
          <Loading />
        ) : productos.length > 1 ? (
          productos.map((element, a) => {
            return (
              <div key={a} className="">
                <EditProductoPage props={element}></EditProductoPage>
              </div>
            );
          })
        ) : (
          <div className="">
            <EditProductoPage props={productos}></EditProductoPage>
          </div>
        )}
      </div>
    </div>
  );
}
