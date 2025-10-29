import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  const [values, setValues] = useState([12, 10, 8, 14, 16]);
  const [moyenne, setMoyenne] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // useEffect est toujours lancé à la création du composant
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  useEffect(() => {
    setMoyenne(values.reduce((total, note) => total + note) / values.length);
    console.log("calcul moyenne relancé");
  }, [values]);

  return (
    <>
      <h1>Le hook useEffect()</h1>

      <ul>
        Le hook useEffect est utilisé :
        <li>pour gérer des effets secondaires dans un composant</li>
        <li>
          pour effectuer des opérations après le rendu du composant : (
          <strong>comme des appels à des API</strong>, la manipulation du DOM,
          la gestion d'abonnement ...)
        </li>
      </ul>

      <p>
        useEffect() est très très souvent utilisé en conjonction avec un
        useState
      </p>

      <h2>Exemple: </h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>

      <p>moyenne : {moyenne}</p>
      <button onClick={() => setValues((prev) => [...prev, 20])}>
        Ajouter un 20/20
      </button>

      {/*   ATTENTION : COMPRENDRE PQ LE PUSH NE FONCTIONNE PAS !!
      
      <button onClick={() => setValues((prev) => prev.push(20))}>
        Ajouter un 20/20
      </button> */}
    </>
  );
};
