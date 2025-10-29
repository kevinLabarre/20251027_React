import { useState } from "react";

export const PassageDonneDeEnfantAParent = () => {
  const [data, setData] = useState("");

  const passData = (text) => {
    // Ici on récupère la donnée passée par l'enfant, la donnée récupérée est la propriété 'text'
    setData(text);
  };

  return (
    <>
      <p>Données envoyées par le composant enfant : {data}</p>
      <Children passDataFct={passData} setter={setData} />
    </>
  );
};

const Children = ({ passDataFct, setter }) => {
  return (
    <>
      <button onClick={() => passDataFct("Données envoyées par 'Children'")}>
        Envoie des données
      </button>
      <button
        onClick={() =>
          setter("Données mise à jour via le setter dans le compo. enfant")
        }
      >
        Envoie des données via le setter
      </button>
    </>
  );
};
