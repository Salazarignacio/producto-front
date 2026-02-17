import { createContext, useState } from "react";

const SelectedProducts = createContext();

function SelectedProviderWrapper(props) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <SelectedProducts.Provider value={{ selectedProducts, setSelectedProducts }}>
      {props.children}
    </SelectedProducts.Provider>
  );
}

export { SelectedProducts, SelectedProviderWrapper };
