import { getAll } from "../api/ProductoService";
import { useState, useEffect } from "react";
import EditPage from "../pages/EditPage";

export default function EditComponent() {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    getAll()
      .then(setProductos)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <EditPage productos={productos}></EditPage>
    </>
  );
}
