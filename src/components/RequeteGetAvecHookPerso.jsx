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
      <ProductTable data={products} deleteFct={() => alert("Non implémenté")} />
    </>
  );
};
