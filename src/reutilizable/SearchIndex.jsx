import ModalCreate from "../components/ModalCreate";
import { useState } from "react";

export default function SearchIndex({ searchPosible, searchCode, posibles }) {
  const [code, setCode] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await searchCode(code);
      setCode("");
    }
  };
  const handleChange = async (value) => {
    await searchPosible(value);
    console.log(posibles);
  };

  return (
    <div className="searcher-container">
      <div className="container-one">
        <input
          value={code}
          onChange={(e) => {
            const value = e.target.value;
            setCode(value);
            handleChange(value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ingrese el código del producto"
          className="search-input"
        ></input>
        <ModalCreate></ModalCreate>
      </div>
      <div className="buscador">
        {posibles.map((a) => {
          return <li>{a.articulo}</li>;
        })}
      </div>
    </div>
  );
}
