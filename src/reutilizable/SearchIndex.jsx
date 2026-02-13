import ModalCreate from "../components/ModalCreate";
import { useState } from "react";

export default function SearchIndex({ searchPosible, searchCode, posibles }) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = async (value) => {
    if (!value) return;
    await searchCode(value);
    setCode("");
    setOpen(false);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await handleSearch(code);
    }
  };

  const handleChange = async (value) => {
    setCode(value);

    if (!value.trim()) {
      setOpen(false);
      return;
    }

    await searchPosible(value);
    setOpen(true);
  };

  const handleSelect = async (producto) => {
    await handleSearch(producto.codigo); // usa codigo real
  };

  return (
    <div className="searcher-container">
      <div className="container-one ">
        <input
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ingrese el código del producto"
          className="search-input"
        />

        <ModalCreate />
      </div>

      {open && posibles.length > 0 && (
        <div className="buscador">
          {posibles.map((a, i) => (
            <div
              key={i}
              className="buscador-item"
              onClick={() => handleSelect(a)}
            >
              {a.articulo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
