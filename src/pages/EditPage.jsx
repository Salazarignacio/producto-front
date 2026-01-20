import Spinner from "react-bootstrap/Spinner";

export default function EditPage({ productos }) {
  console.log(productos);
  let loading = (
    <div className="d-flex justify-content-center p-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
  return (
    <>
      Edit Page
      {!productos
        ? loading
        : productos.map((element, a) => {
            return (
              <div key={a}>
                <li>{element.articulo}</li>
              </div>
            );
          })}
    </>
  );
}
