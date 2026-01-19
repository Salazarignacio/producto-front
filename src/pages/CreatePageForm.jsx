import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function CreatePageForm({ onSave }) {
  const [formData, setFormData] = useState({
    articulo: "",
    categoria: "",
    precio: 0,
    stock: 0,
    codigo: 0,
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Codigo</Form.Label>
          <Form.Control
            type="number"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
          />
          <Form.Label>Nombre articulo</Form.Label>
          <Form.Control
            type="text"
            name="articulo"
            value={formData.articulo}
            onChange={handleChange}
          />
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
          />
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Cargar producto
        </Button>
      </Form>
    </div>
  );
}
