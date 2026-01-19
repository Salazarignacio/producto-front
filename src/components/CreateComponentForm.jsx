import { create } from "../api/ProductoService";
import { useState } from "react";
import CreatePageForm from "../pages/CreatePageForm";

export default function CreateComponentForm() {
  const [productos, setProductos] = useState(null);

  const save = (prod) => {
    create(prod)
      .then((res) => setProductos(res))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <CreatePageForm onSave={save}></CreatePageForm>
    </>
  );
}
