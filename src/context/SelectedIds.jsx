import { createContext, useState } from "react";

const SelectedIds = createContext();

function SelectedProviderWrapper(props) {
  const [selectedIds, setSelectedIds] = useState([]);
  return (
    <SelectedIds.Provider value={{ selectedIds, setSelectedIds }}>
      {props.children}
    </SelectedIds.Provider>
  );
}

export { SelectedIds, SelectedProviderWrapper };
