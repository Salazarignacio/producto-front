import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import EditComponent from "./components/EditComponent.jsx";
import DeleteProductoBDC from "./components/DeleteProductBDC.jsx";
import "./style/Style.css";
import { ProductProviderWrapper } from "./context/ProductContext.jsx";
import VentasComponent from "./components/VentasComponent.jsx";
import BalanceWeb from "./components/BalanceWeb.jsx";

function App() {
  return (
    <div className="app">
      <ProductProviderWrapper>
        <BrowserRouter>

          <MainPage>
            <Routes>
              <Route path="/edicion" element={<EditComponent />} />
              <Route path="/destroy" element={<DeleteProductoBDC />} />
              <Route path="/" element={<VentasComponent />} />
              <Route path="/ventas" element={<VentasComponent />} />
              <Route path="/balance" element={<BalanceWeb />} />
            </Routes>
          </MainPage>

        </BrowserRouter>
      </ProductProviderWrapper>
    </div>
  );
}

export default App;
