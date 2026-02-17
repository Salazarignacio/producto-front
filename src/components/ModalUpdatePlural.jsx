import { Button } from "react-bootstrap";
import { SelectedIds } from "../context/SelectedIds";
import editbtn from "../assets/editbtn.png";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Modal } from "react-bootstrap";
import { getById, update } from "../api/ProductoService";

export default function UpdatePlural() {
  const { selectedIds } = useContext(SelectedIds);
  const isEmpty = selectedIds.length < 2;

  const [show, setShow] = useState(false);
  const [productos, setProductos] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = async () => {
    setShow(true);
    selectedIds.forEach(async (id) => {
      const data = await getById(id);
      setProductos((prev) => {
        return [...prev, data];
      });
    });
    console.log(productos);
  };

  return (
    <>
      <Button
        variant="primary"
        className={isEmpty ? "btn-vacio" : "btn-mas"}
        disabled={isEmpty}
        onClick={handleShow}
      >
        Edición Múltiple <img src={editbtn}></img>
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Editar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Hola</div>
        </Modal.Body>
      </Modal>
    </>
  );
}
