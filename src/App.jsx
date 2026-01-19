import "./App.css";
import CreateComponentForm from "./components/CreateComponentForm.jsx";
import UpdateComponentForm from "./components/UpdateComponentForm.jsx";
import DeleteProductoBDC from "./components/DeleteProductBDC.jsx";

function App() {
  return (
    <>
      <DeleteProductoBDC />
      <UpdateComponentForm />
      <CreateComponentForm />
      Producto Front
    </>
  );
}

export default App;
