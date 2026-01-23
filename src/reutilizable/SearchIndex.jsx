import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SearchIndex({props, searchCode}) {
  return (
    <>
      <input onChange={searchCode}></input>
      <Link to={"/create"}>
        <Button>Producto Nuevo</Button>
      </Link>
    </>
  );
}
