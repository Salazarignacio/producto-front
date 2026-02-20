import ModalCreate from "../components/ModalCreate";
import { useState, useEffect } from "react";

export default function SearchIndex({ searchPosible, searchCode, posibles }) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  // 🔎 BUSQUEDA FINAL (cuando se presiona ENTER o se selecciona)
  const handleSearch = async (value) => {
    if (!value.trim()) return;

    await searchCode(value); // agrega producto real
    setCode("");
    setOpen(false);
  };

  // ⌨️ ENTER del lector o teclado
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // evita comportamientos raros
      await handleSearch(code);
    }
  };

  // ✍️ solo guardar texto (NO buscar acá)
  const handleChange = (value) => {
    setCode(value);

    if (!value.trim()) {
      setOpen(false);
    }
  };

  // 🧠 DEBOUNCE PRO (dropdown humano)
  useEffect(() => {
    if (!code.trim()) return;

    const timer = setTimeout(async () => {
      await searchPosible(code); // busca en BD remoto
      setOpen(true);
    }, 300); // tiempo clave (250-350 ideal)

    return () => clearTimeout(timer);
  }, [code]);

  // 🖱️ click en dropdown
  const handleSelect = async (producto) => {
    await handleSearch(producto.codigo);
  };

  return (
    <div className="searcher-container">
      <div className="container-one">
        <input
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ingrese el código del producto "
          className="search-input"
        />
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

      <div>
        <ModalCreate />
      </div>
    </div>
  );
}
