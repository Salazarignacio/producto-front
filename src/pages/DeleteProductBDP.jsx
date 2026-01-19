import { Button } from "react-bootstrap";

export function DeleteProductoBDP({ destroyFn }) {
  return (
    <>
      <Button onClick={destroyFn}>Delete</Button>
    </>
  );
}
