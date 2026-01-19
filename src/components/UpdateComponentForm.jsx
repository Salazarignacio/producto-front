import { useState } from "react";
import { update } from "../api/ProductoService";
import UpdatePageForm from "../pages/UpdatePageForm.jsx";

export default function UpdateComponentForm() {
  const [producto, setProducto] = useState(null);
  const updateProduct = (prod) => {
    update(34, prod)
      .then((data) => setProducto(data))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <UpdatePageForm updateFn={updateProduct}></UpdatePageForm>
    </>
  );
}
