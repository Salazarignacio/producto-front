import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import EditComponent from "./components/EditComponent.jsx";
import DeleteProductoBDC from "./components/DeleteProductBDC.jsx";
import "./style/Style.css";
import { ProductProviderWrapper } from "./context/ProductContext.jsx";
import VentasComponent from "./components/VentasComponent.jsx";
import TesteComponent from "./components/TestComponent.jsx";

function App() {
  return (
    <div className="app">
      <ProductProviderWrapper>
        <BrowserRouter>
          <MainPage></MainPage>
          
          <Routes>
            <Route exact path="/edicion" element={<EditComponent />}></Route>
            <Route exact path="/" element={<TesteComponent></TesteComponent>}></Route>
            {/* Delete */}

            <Route
              exact
              path="/destroy"
              element={<DeleteProductoBDC />}
            ></Route>
            {/* Ventas */}
            <Route exact path="/ventas" element={<VentasComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductProviderWrapper>
    </div>
  );
}

export default App;
