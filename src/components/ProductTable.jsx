import axios from "axios";
import { useProducts } from "../hooks/useProducts";
import { AjouterProduit } from "./AjouterProduit";
import { useState } from "react";

export const ProductTable = ({ data, deleteFct }) => {
  const { deleteProduct } = useProducts();

  const [displayForm, setDisplayForm] = useState(false);

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .then((resp) => deleteFct(resp.data.id));
  };

  const handleDeleteWithHook = (productId) => {
    deleteProduct(productId).then((resp) => deleteFct(resp.data.id));
  };

  const handleDisplayForm = () => {
    setDisplayForm(true);
  };

  return (
    <div>
      <table>
        <caption>Liste des produits: </caption>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Quantité</th>
            <th scope="col">Couleur</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.number}</td>
              <td>{p.color}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>Supprimer</button>
                <button onClick={() => handleDeleteWithHook(p.id)}>
                  Supprimer avec Hook
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDisplayForm}>Ajouter un nouveau produit</button>

      {displayForm && <AjouterProduit />}
    </div>
  );
};
