import { Button } from "react-bootstrap";

export function DeleteProductoBDP({ destroyFn, id }) {
  return (
    <>
      <Button onClick={() => destroyFn(id)}>Delete</Button>
    </>
  );
}
