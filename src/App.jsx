import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./pages/JsxTheorie";
import HookUseState from "./pages/HookUseState";
import { ListWithMap } from "./pages/ListWithMap";
import { PassageDonneEntreComposant } from "./pages/PassageDonneEntreComposant";
import { Navbar } from "./components/Navbar/Navbar";
import { Formulaire } from "./pages/Formulaire";
import { Exercice } from "./pages/Exercice";
import { HookUseEffect } from "./pages/HookUseEffect";
import { RequeteApi } from "./pages/RequeteApi";
import { HookPerso } from "./pages/HookPerso";

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
        <Route path="formulaire" element={<Formulaire />} />
        <Route path="exercice" element={<Exercice />} />
        <Route path="hook-use-effect" element={<HookUseEffect />} />
        <Route path="requete-api" element={<RequeteApi />} />
        <Route path="hook-perso" element={<HookPerso />} />

        <Route path="*" element={<h1>page 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
