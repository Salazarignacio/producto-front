import SearchIndex from "../reutilizable/SearchIndex.jsx";

export default function VentasPage({ props }) {
  return (
    <>
      <li>{props.articulo}</li>
      <li>{props.precio}</li>
    </>
  );
}
