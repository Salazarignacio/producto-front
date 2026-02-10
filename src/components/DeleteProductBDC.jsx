import { useContext } from "react";
import { destroy } from "../api/ProductoService";
import { Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import deleteBtn from "../assets/deleteBtn.png"

export default function DeleteProductoBDC({ id }) {
  const { setRenderProducts } = useContext(ProductContext);

  const destroyBD = (id) => {
    destroy(parseInt(id))
      .then((data) => setRenderProducts((prev) => !prev))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Button className="delete-btn" onClick={() => destroyBD(id)}>
        <img src={deleteBtn}></img>
      </Button>
    </>
  );
}
