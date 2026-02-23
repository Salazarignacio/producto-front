import Loading from "../reutilizable/Loading.jsx";
import EditProductoPage from "./EditProductoPage";
import ModalCreate from "../components/ModalCreate.jsx";
import "../style/Style.css";
import ModalUpdatePlural from "../components/ModalUpdatePlural.jsx"


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
       <ModalUpdatePlural></ModalUpdatePlural> 
      </div>

      <div className="scroll ">
      <div className="productos-header">
     {/*      <span></span>
          <span>Codigo</span>
          <span>Nombre</span>
          <span>Categoría</span>
          <span>Precio</span>
          <span>Stock</span>
          <span></span>
          <span></span> */}
        </div> 
        {productos.length < 1 ? (
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
