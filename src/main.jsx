import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Avec le stricmode

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// Sans le 'StrictMode', qui ajoute des vérifications supp. pour de la détection de bugs
//   entre autres, chaque composant sera créé, détruit, puis recréé.

createRoot(document.getElementById("root")).render(<App />);
