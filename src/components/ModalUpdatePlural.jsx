import { Button } from "react-bootstrap";
import { SelectedIds } from "../context/SelectedIds";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { getById, update } from "../api/ProductoService";
import UpdatePageForm from "../pages/UpdatePageForm";

export default function UpdatePlural() {
  const { selectedIds } = useContext(SelectedIds);
  const isEmpty = selectedIds.length < 2;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateProds = async (formData) => {
    try {
      // Eliminamos codigo del objeto
      const { codigo, ...dataSinCodigo } = formData;
      console.log(selectedIds);
      await Promise.all(
        selectedIds.map(async (id) => {
          const original = await getById(id);

          const merged = {
            ...original,
            ...dataSinCodigo,
          };

          return update(id, merged);
        }),
      );

      handleClose();
    } catch (error) {
      console.error("Error en actualización múltiple", error);
    }
  };

  return (
    <>
      <Button
        variant="primary"
        className={isEmpty ? "btn-vacio" : "btn-mas"}
        disabled={isEmpty}
        onClick={handleShow}
      >
        Edición Múltiple <i className="fa-regular fa-pen-to-square m-2"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Editar Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdatePageForm updateFn={updateProds} isMultiple={true} />
        </Modal.Body>
      </Modal>
    </>
  );
}
