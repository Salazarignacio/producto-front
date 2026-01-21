import { getAll, getByCode } from "../api/ProductoService";
import { useState, useEffect } from "react";
import EditPage from "../pages/EditPage";

export default function EditComponent() {
  const [productos, setProductos] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAll()
      .then(setProductos)
      .catch((err) => console.error(err));
  }, []);

  const searchCode = (e) => {
    const code = e.target.value;
    if (!code) {
      getAll()
        .then(setProductos)
        .catch((err) => console.error(err));
    }
    getByCode(code)
      .then(setProductos)
      .catch((err) => console.error(err));
  };

  return (
    <>
      <EditPage productos={productos} searchCode={searchCode}></EditPage>
    </>
  );
}
