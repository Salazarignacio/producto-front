import { useContext, useState } from "react";
import { destroy } from "../api/ProductoService";
import { Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";

export default function DeleteProductoBDC({ id }) {
  const [producto, setProducto] = useState(true);
  const { renderProducts, setRenderProducts, setNombre, nombre } =
    useContext(ProductContext);

  const destroyBD = (id) => {
    destroy(parseInt(id))
      .then((data) => setRenderProducts((prev) => !prev))
      .catch((err) => console.error(err));
  };
  return (
    <>
      {nombre}
      <Button className="btn-edit" onClick={() => destroyBD(id)}>Delete</Button>
    </>
  );
}
