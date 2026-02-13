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

      <div className="scroll ">
{/*         <li className="productos-header">
          <span>Codigo</span>
          <span>Nombre</span>
          <span>Categoría</span>
          <span>Precio</span>
          <span>Stock</span>
           <span></span>
           <span></span>
          
        </li> */}
        {productos.length < 0 ? (
          <Loading />
        ) : (
          productos.map((element, a) => {
            return (
              <div key={a} className="">
                <EditProductoPage props={element}></EditProductoPage>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
