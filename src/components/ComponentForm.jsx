import { create } from "../api/ProductoService";
import { useState } from "react";
import PageForm from "../pages/PageForm";

export default function ComponentForm() {
  const [productos, setProductos] = useState(null);

  const save = (prod) => {
    create(prod)
      .then((res) => setProductos(res))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <PageForm onSave={save}></PageForm>
    </>
  );
}
