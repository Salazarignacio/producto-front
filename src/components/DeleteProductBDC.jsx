import { useContext } from "react";
import { destroy } from "../api/ProductoService";
import { Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import deleteBtn from "../assets/deleteBtn.png";


export default function DeleteProductoBDC({ id }) {
  const { setRenderProducts } = useContext(ProductContext);

  const destroyBD = (id) => {
    const ok = window.confirm("¿Eliminar producto de la BD?");
    if (!ok) return;
    destroy(parseInt(id))
      .then((data) => setRenderProducts((prev) => !prev))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Button className="btn-edit" onClick={() => destroyBD(id)}>
        <img src={deleteBtn}></img>
      </Button>
    </>
  );
}
