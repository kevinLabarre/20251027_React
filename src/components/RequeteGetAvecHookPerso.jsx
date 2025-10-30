import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductTable } from "./ProductTable";

export const RequeteGetAvecHookPerso = () => {
  const { getProducts } = useProducts();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp.data));
  }, []);

  return (
    <>
      {/* La logique de la suppression est présente sur le composant parent (RequeteApi) 
        (voir tableau au dessus sur le navigateur)
      */}
      <p>
        <strong>Note :</strong>
        Exercice : Implémenter la logique pour mettre à jour le tableau lors des
        ajouts de produits et des suppressions. (voir tableau au dessus sur le
        navigateur)
      </p>
      <ProductTable data={products} deleteFct={() => alert("Non implémenté")} />
    </>
  );
};
