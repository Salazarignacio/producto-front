import { getAll, getByCode } from "../api/ProductoService";
import { useState, useEffect, useContext } from "react";
import EditPage from "../pages/EditPage";
import { ProductContext } from "../context/ProductContext";

export default function EditComponent() {
  const [productos, setProductos] = useState(null);
  const { renderProducts } = useContext(ProductContext);

  useEffect(() => {
    getAll()
      .then(setProductos)
      .catch((err) => console.error(err));
  }, [renderProducts]);

  const searchCode = async (e) => {
    const code = e.target.value;
    if (!code) {
      getAll()
        .then(setProductos)
        .catch((err) => console.error(err));
    }

    getByCode(code)
      .then(setProductos)
      .catch((err) => {
        console.error("Falló getByCode:", err);
        return getAll()
          .then(setProductos)
          .catch((err) => console.error("Falló getAll:", err));
      });
  };

  return (
    <div className="edit p-4">
      <h2 className="mb-2">Editar Productos</h2>
      <EditPage productos={productos} searchCode={searchCode}></EditPage>
    </div>
  );
}
