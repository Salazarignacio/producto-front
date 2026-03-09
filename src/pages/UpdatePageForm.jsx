import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function UpdatePageForm({ updateFn, producto, isMultiple }) {
  const [modoPrecio, setModoPrecio] = useState("precio");
  const [formData, setFormData] = useState({
    articulo: "",
    categoria: "",
    precio: "",
    porcentaje: "",
    stock: "",
    codigo: "",
  });
  const [touched, setTouched] = useState({
    codigo: false,
    articulo: false,
  });

  const isValid = isMultiple
    ? Object.entries(formData).some(
        ([key, value]) => key !== "codigo" && value !== "",
      )
    : formData.codigo.trim() !== "" && formData.articulo.trim() !== "";

  useEffect(() => {
    if (producto) {
      setFormData({
        articulo: producto.articulo,
        categoria: producto.categoria,
        precio: producto.precio,
        porcentaje: "",
        stock: producto.stock,
        codigo: producto.codigo,
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => {
      let newData = {
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      };

      if (name === "porcentaje" && value !== "") {
        newData.precio = "";
      }
      if (name === "precio" && value !== "") {
        newData.porcentaje = "";
      }

      return newData;
    });
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  if (!isValid) return;

  let dataToSend = { ...formData };

  if (modoPrecio === "porcentaje" && producto?.precio) {
    dataToSend.precio = producto.precio * (1 + formData.porcentaje / 100);
  }

  updateFn(dataToSend);
};
  return (
    <div>
      <Form onSubmit={handleSubmit} className="update-form">
        {!isMultiple && (
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              onBlur={() => setTouched((prev) => ({ ...prev, codigo: true }))}
              placeholder="Código obligatorio *"
              className={`input-soft ${
                touched.codigo && !formData.codigo.trim() ? "input-error" : ""
              }`}
            />
            {touched.codigo && !formData.codigo.trim() && (
              <div className="error-text">El código es obligatorio</div>
            )}
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Nombre del artículo</Form.Label>
          <Form.Control
            type="text"
            name="articulo"
            value={formData.articulo}
            onChange={handleChange}
            onBlur={() => setTouched((prev) => ({ ...prev, articulo: true }))}
            placeholder="Nombre artículo obligatorio *"
            className={`input-soft ${
              touched.articulo && !formData.articulo.trim() ? "input-error" : ""
            }`}
          />
          {touched.articulo && !formData.articulo.trim() && (
            <div className="error-text">
              El nombre del artículo es obligatorio
            </div>
          )}
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
          <Form.Group className="mb-2">
            <Form.Check
              type="radio"
              label="Precio exacto"
              name="modoPrecio"
              checked={modoPrecio === "precio"}
              onChange={() => setModoPrecio("precio")}
            />

            <Form.Check
              type="radio"
              label="Aumentar por porcentaje"
              name="modoPrecio"
              checked={modoPrecio === "porcentaje"}
              onChange={() => setModoPrecio("porcentaje")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio exacto</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              disabled={modoPrecio !== "precio"}
              className="input-soft"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio en %</Form.Label>
            <Form.Control
              type="number"
              name="porcentaje"
              value={formData.porcentaje}
              onChange={handleChange}
              disabled={modoPrecio !== "porcentaje"}
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

        <Button
          type="submit"
          className={`w-100 mt-3 ${isValid ? "btn-mas" : "btn-vacio"}`}
          disabled={!isValid}
        >
          {isMultiple
            ? "Actualizar productos seleccionados"
            : "Actualizar producto"}
        </Button>
      </Form>
    </div>
  );
}
