import ModalCreate from "../components/ModalCreate";
import { useState, useEffect } from "react";
import { useRef } from "react";

export default function SearchIndex({ searchPosible, searchCode, posibles }) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemsRef = useRef([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    setSelectedIndex(-1);
  }, [posibles]);

  // 🔎 BUSQUEDA FINAL (cuando se presiona ENTER o se selecciona)
  const handleSearch = async (value) => {
    if (!value.trim()) return;

    await searchCode(value); // agrega producto real
    setCode("");
    setOpen(false);
  };

  // ⌨️ ENTER del lector o teclado
  const handleKeyDown = async (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (!open) {
        setOpen(true);
        return;
      }

      setSelectedIndex((prev) => (prev < posibles.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : posibles.length - 1));
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (open && selectedIndex >= 0) {
        await handleSelect(posibles[selectedIndex]);
      } else {
        await handleSearch(code);
      }
    }

    if (e.key === "Escape") {
      setOpen(false);
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

  useEffect(() => {
    if (selectedIndex >= 0) {
      itemsRef.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  return (
    <div className="searcher-container">
      <div className="container-one">
        <input
          ref={inputRef}
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
                ref={(el) => (itemsRef.current[i] = el)}
                className={`buscador-item ${
                  i === selectedIndex ? "active" : ""
                }`}
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
