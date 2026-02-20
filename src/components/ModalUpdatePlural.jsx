import { Button } from "react-bootstrap";
import { SelectedIds } from "../context/SelectedIds";
import editbtn from "../assets/editbtn.png";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Modal } from "react-bootstrap";
import { getById, update } from "../api/ProductoService";
import UpdatePageForm from "../pages/UpdatePageForm";

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
        if (prev.includes(id)) return prev;
        return [...prev, data];
      });
    });
  };
  const updateProds = async (prod) => {
    productos.forEach(async (id) => {
      const data = await update(parseInt(id), prod);
      setProductos((prev) => {
        if (prev.includes(id)) return prev;
        return [...prev, data];
      });
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        className={isEmpty ? "btn-vacio" : "btn-mas"}
        disabled={isEmpty}
        onClick={handleShow}
      >
        Edición Múltiple <i class="fa-regular fa-pen-to-square m-2"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Editar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdatePageForm
            updateFn={updateProds}
            producto={productos}
          ></UpdatePageForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
