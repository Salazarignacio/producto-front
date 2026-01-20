import { useState } from "react";
import { destroy } from "../api/ProductoService";
import { DeleteProductoBDP } from "../pages/DeleteProductBDP";

export default function DeleteProductoBDC({ id }) {
  const [producto, setProducto] = useState(null);

  const destroyBD = (id) => {
    console.log(id);
    destroy(parseInt(id))
      .then((data) => setProducto(data))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <DeleteProductoBDP destroyFn={destroyBD} id={id}></DeleteProductoBDP>
    </>
  );
}
