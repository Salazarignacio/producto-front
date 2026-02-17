import { Button } from "react-bootstrap";
import { SelectedProducts } from "../context/SelectedProducts";
import editbtn from "../assets/editbtn.png";
import { useContext } from "react";

export default function UpdatePlural({ ids }) {
  const { selectedProducts } = useContext(SelectedProducts);
  const isEmpty = selectedProducts.length < 2;

  return (
    <>
      <Button
        variant="primary"
        className={isEmpty ? "btn-vacio" : "btn-mas"}
        disabled={isEmpty}
      >
        Edición Múltiple <img src={editbtn}></img>
      </Button>
    </>
  );
}
