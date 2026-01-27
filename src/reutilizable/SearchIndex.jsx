import ModalCreate from "../components/ModalCreate";

export default function SearchIndex({ props, searchCode }) {
  return (
    <div className="container-one mb-3">
      <input onChange={searchCode} placeholder="Ingrese el código del producto" className="search-input"></input>
      <ModalCreate></ModalCreate>
    </div>
  );
}
