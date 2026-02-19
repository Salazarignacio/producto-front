import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function UpdatePageForm({ updateFn, producto }) {
  const [formData, setFormData] = useState({
    articulo: "",
    categoria: "",
    precio: 0,
    stock: 0,
    codigo: 0,
  });
  useEffect(() => {
    if (producto) {
      setFormData({
        articulo: producto.articulo,
        categoria: producto.categoria,
        precio: producto.precio,
        stock: producto.stock,
        codigo: producto.codigo,
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFn(formData);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="update-form">
        <Form.Group className="mb-3">
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            className="input-soft"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre del artículo</Form.Label>
          <Form.Control
            type="text"
            name="articulo"
            value={formData.articulo}
            onChange={handleChange}
            className="input-soft"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="input-soft"
          />
        </Form.Group>

        <div className="form-row-2">
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              className="input-soft"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="input-soft"
            />
          </Form.Group>
        </div>

        <Button type="submit" className="btn-primary-soft w-100 mt-3">
          Actualizar producto
        </Button>
      </Form>
    </div>
  );
}
