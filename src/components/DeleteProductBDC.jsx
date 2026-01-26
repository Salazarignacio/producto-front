import { useContext } from "react";
import { destroy } from "../api/ProductoService";
import { Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";

export default function DeleteProductoBDC({ id }) {
  const { setRenderProducts } = useContext(ProductContext);

  const destroyBD = (id) => {
    destroy(parseInt(id))
      .then((data) => setRenderProducts((prev) => !prev))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Button className="btn-edit" onClick={() => destroyBD(id)}>
        Delete
      </Button>
    </>
  );
}
