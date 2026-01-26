import { createContext, useState } from "react";

const ProductContext = createContext();

function ProductProviderWrapper(props) {
  const [renderProducts, setRenderProducts] = useState(false);
  return (
    <ProductContext.Provider value={{ renderProducts, setRenderProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProviderWrapper };
