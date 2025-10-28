import { useState } from "react";

export const Exercice = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];
  const [inStock, setInStock] = useState(false);

  const fruits = products.filter((p) => p.category === "fruits");

  const handleCheck = (e) => {
    setInStock(e.target.checked);
  };

  return (
    <>
      <h1>Exercice</h1>
      <h2>Consigne :</h2>
      <p>
        1. Créer un composant enfant qui affiche les produits, l'appeler deux
        fois : Une fois pour les fruits / une fois pour les légumes
      </p>
      <p>
        2. Créer une checkbox qui permettra d'afficher/masquer les produits qui
        ne sont plus en stock (quand number est égal à 0)
      </p>
      <p>
        3. Faire une barre de recherche qui permettra de filtrer les éléments
      </p>
      {/* 
      <input type="checkbox" />

    <ProductList data={fruits} />
      <ProductList data={vegetables} /> */}
      <input type="checkbox" onChange={handleCheck} value={inStock} />

      <ProductList products={fruits} inStock={inStock} />
      {/* <ProductList products={vegetable} /> */}
    </>
  );
};

function ProductList({ products, inStock = true }) {
  return (
    <>
      {products
        .filter((p) => {
          if (inStock) {
            return true;
          } else {
            return p.number > 0;
          }
        })
        .map((p) => (
          <p>{p.name}</p>
        ))}
    </>
  );
}
