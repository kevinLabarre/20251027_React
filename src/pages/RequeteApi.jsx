import axios from "axios";
import { useEffect, useState } from "react";
import { ProductTable } from "../components/ProductTable";
import { RequeteGetAvecHookPerso } from "../components/RequeteGetAvecHookPerso";

export const RequeteApi = () => {
  const [products, setProducts] = useState([]);

  const [errorApi, setErrorApi] = useState();

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDeleteOneProduct = (deletedProduct_Id) => {
    setProducts((prev) => prev.filter((p) => deletedProduct_Id !== p.id));
  };

  const handleAddOneProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const loadProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data);
      })
      .catch((error) => setErrorApi(error))
      .finally(() => console.log("Réponse OU erreur reçue"));
  };

  return (
    <>
      <h1>Requêtes API</h1>
      <h2>Requêtes directement faite dans le composant</h2>

      {!errorApi ? (
        products.length > 0 ? (
          <ProductTable
            data={products}
            deleteFct={handleDeleteOneProduct}
            addFct={handleAddOneProduct}
          />
        ) : (
          <p>Chargement en cours...</p>
        )
      ) : (
        <>
          <p>
            ERREUR : chargement impossible. Vérifier que le json serveur est
            lancé
          </p>
          <p>
            Message d'erreur reçu du backend :
            <strong> {errorApi.message}</strong>
          </p>
        </>
      )}

      <h2>Requêtes en utilisant notre hook perso</h2>
      <RequeteGetAvecHookPerso />
    </>
  );
};
