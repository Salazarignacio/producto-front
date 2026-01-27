import { Button } from "react-bootstrap";

export default function VentasPage({ props, eliminarProducto }) {
  return (
    <>
      {props.map((a) => (
        <div key={a.codigo} className="carrito-container">
          <li>{a.codigo}</li>
          <li>{a.articulo}</li>
          <li>{a.cantidad}</li>
          <li>${a.precio}</li>
          <li>${a.precio * a.cantidad}</li>
          <li>
            <Button onClick={() => eliminarProducto(a.codigo)}>Eliminar</Button>
          </li>
        </div>
      ))}
    </>
  );
}
