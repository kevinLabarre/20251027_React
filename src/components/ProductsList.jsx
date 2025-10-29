export const ProductsList = ({ products, afficherHorsStock, recherche }) => {
  return (
    <>
      <h1>Liste des "{products[0].category}" :</h1>

      {/* SOLUTION 1: avec le ternaire */}
      {products
        // Condition de filtre 'true' --> On garde tous les produits
        .filter((product) => (afficherHorsStock ? true : product.number > 0))
        .filter((product) =>
          product.name.toLowerCase().includes(recherche.toLowerCase())
        )
        .map((p) => (
          <ul key={p.name}>
            <li>{p.name}</li>
            <li>categorie : {p.category}</li>
            <li>prix: {p.price}</li>
            <li>quantité: {p.number}</li>
          </ul>
        ))}

      {/*SOLUTION 2: Sans le ternaire + avec un seul filter */}
      {products
        .filter((product) => {
          if (afficherHorsStock) {
            return product.name.toLowerCase().includes(recherche.toLowerCase()); // Condition de filtre 'true' --> On garde tous les produits
          } else {
            return (
              product.number > 0 &&
              product.name.toLowerCase().includes(recherche.toLowerCase())
            );
          }
        })
        .map((p) => (
          <ul key={p.name}>
            <li>{p.name}</li>
            <li>categorie : {p.category}</li>
            <li>prix: {p.price}</li>
            <li>quantité: {p.number}</li>
          </ul>
        ))}
    </>
  );
};
