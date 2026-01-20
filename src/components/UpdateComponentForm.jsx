import { useState, useEffect } from "react";
import { update } from "../api/ProductoService";
import UpdatePageForm from "../pages/UpdatePageForm.jsx";
import { useParams } from "react-router-dom";

export default function UpdateComponentForm() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    console.log(id);
  }, [id]);

  const updateProduct = (prod) => {
    update(parseInt(id), prod)
      .then((data) => setProducto(data))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <UpdatePageForm updateFn={updateProduct}></UpdatePageForm>
    </>
  );
}
