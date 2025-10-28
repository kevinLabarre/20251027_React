import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./pages/JsxTheorie";
import HookUseState from "./pages/HookUseState";
import { ListWithMap } from "./pages/ListWithMap";
import { PassageDonneEntreComposant } from "./pages/PassageDonneEntreComposant";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    // Tous les éléments de notre application doivent être placés dans  <BrowserRouter>, sinon
    // les redirections lancés depuis les composants placés hors du <BrowserRouter> ne fonctionneront pas

    <BrowserRouter>
      {/* Partie statique de l'application (par exemple: notre navbar) */}

      <Navbar />

      <Routes>
        <Route path="" element={<JsxTheorie />} />
        <Route path="hook-use-state" element={<HookUseState />} />
        <Route path="liste-avec-map" element={<ListWithMap />} />
        <Route
          path="composant-enfant"
          element={<PassageDonneEntreComposant />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
