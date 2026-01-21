import "./App.css";
import CreateComponentForm from "./components/CreateComponentForm.jsx";
import UpdateComponentForm from "./components/UpdateComponentForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import EditComponent from "./components/EditComponent.jsx";
import DeleteProductoBDC from "./components/DeleteProductBDC.jsx";
import "./index.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainPage></MainPage>
        <Routes>
          <Route exact path="/edicion" element={<EditComponent />}></Route>
          {/* CRUD */}
          <Route
            exact
            path="/update/:id"
            element={<UpdateComponentForm />}
          ></Route>
          <Route exact path="/create" element={<CreateComponentForm />}></Route>
          <Route exact path="/destroy" element={<DeleteProductoBDC />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
