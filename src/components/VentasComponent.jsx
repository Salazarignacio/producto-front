import SearchIndex from "../reutilizable/SearchIndex";
import { useEffect, useState } from "react";
import { getByCode } from "../api/ProductoService";
import VentasPage from "../pages/VentasPage";
import Loading from "../pages/Loading";

export default function VentasComponent({}) {
  const [producto, setProducto] = useState(null);

  const searchCode = async (e) => {
    const code = e.target.value;
    const data = await getByCode(code);
    setProducto(data);
  };
  useEffect(() => {
    console.log(producto);
  }, [producto]);
  return (
    <>
      Ventas<SearchIndex searchCode={searchCode}></SearchIndex>
      {!producto ? "Ingrese Procuto" : <VentasPage props={producto}></VentasPage>}
    </>
  );
}
