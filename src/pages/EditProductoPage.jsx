import DeleteProductoBDC from "../components/DeleteProductBDC.jsx";
import ModalUpdate from "../components/ModalUpdate.jsx";

export default function EditProductoPage({ props }) {
  return (
    <ul className="productos-edit">
      <li className="producto-row">
        <span className="codigo">{props.codigo}</span>
        <span className="nombre">{props.articulo}</span>
        {/* <span className="nombre">{props.categoria}</span> */}
        <span className="precio">${props.precio}</span>
        <span className="stock">{props.stock}</span>

        <div className="prod-edit-btn">
          <ModalUpdate id={props.id}></ModalUpdate>
          <DeleteProductoBDC id={props.id} />
        </div>
      </li>
    </ul>
  );
}
