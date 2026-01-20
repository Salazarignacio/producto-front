import "./App.css";
import CreateComponentForm from "./components/CreateComponentForm.jsx";
import UpdateComponentForm from "./components/UpdateComponentForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import EditComponent from "./components/EditComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/edicion" element={<EditComponent />}></Route>
        <Route exact path="/update" element={<UpdateComponentForm />}></Route>
        <Route exact path="/create" element={<CreateComponentForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
