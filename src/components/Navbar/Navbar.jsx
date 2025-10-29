import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Jsx Théorie</Link>
      <Link to="/hook-use-state">Hook useState()</Link>
      <Link to="/liste-avec-map">Parcourir une liste</Link>
      <Link to="/composant-enfant">Passage de données parent/enfant</Link>
      <Link to="/formulaire">Les formulaires</Link>
      <Link to="/exercice">Exercice</Link>
      <Link to="/hook-use-effect">hook useEffect</Link>
      <Link to="/requete-api">Requêtes API</Link>
      <Link to="/hook-perso">Hook perso.</Link>
    </nav>
  );
};
