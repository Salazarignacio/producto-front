import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { create } from "../api/ProductoService";
import CreatePageForm from "../pages/CreatePageForm";
import botonMas from "../assets/botonmas.png";



export default function ModalCreate({}) {
  const { setRenderProducts } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState(null);

  const save = async (prod) => {
    const data = await create(prod);
    setProducto(data);
    setRenderProducts((prev) => !prev);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Button variant="primary" className="btn-mas" onClick={handleShow}>
        Agregar Producto <span className="m-2"><i className="fa-solid fa-plus"></i></span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreatePageForm onSave={save}></CreatePageForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
