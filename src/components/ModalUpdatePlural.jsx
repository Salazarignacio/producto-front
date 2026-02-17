import { Button } from "react-bootstrap";
import { SelectedProducts } from "../context/SelectedProducts";
import editbtn from "../assets/editbtn.png";
import { useContext } from "react";

export default function UpdatePlural({ ids }) {
  const { selectedProducts } = useContext(SelectedProducts);

  return (
    <>
      <Button
        variant="primary"
        className="btn-mas"
        onClick={() => console.log(selectedProducts)}
      >
        Edición Múltiple <img src={editbtn}></img>
      </Button>
    </>
  );
}
