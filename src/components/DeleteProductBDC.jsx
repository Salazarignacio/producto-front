import { useState } from "react";
import { destroy } from "../api/ProductoService";
import { DeleteProductoBDP } from "../pages/DeleteProductBDP";

export default function DeleteProductoBDC() {
  const [producto, setProducto] = useState(null);

  const destroyBD = () => {
    destroy(28)
      .then((data) => setProducto(data))
      .catch((err) => console.error(err));
  };
  return <><DeleteProductoBDP destroyFn={destroyBD}></DeleteProductoBDP></>
}
