import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Jsx Théorie</Link>
      <Link to="/hook-use-state">Hook useState()</Link>
      <Link to="/liste-avec-map">Parcourir une liste</Link>
      <Link to="/composant-enfant">Passage de données parent/enfant</Link>
    </nav>
  );
};
