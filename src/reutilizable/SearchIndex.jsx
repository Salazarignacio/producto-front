import ModalCreate from "../components/ModalCreate";
import { useState } from "react";

export default function SearchIndex({ props, searchCode }) {
  const [code, setCode] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await searchCode(code);
      setCode("");
    }
  };

  return (
    <div className="container-one mb-3">
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ingrese el código del producto"
        className="search-input"
      ></input>
      <ModalCreate></ModalCreate>
    </div>
  );
}
