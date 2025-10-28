import { useState } from "react";

export const Formulaire = () => {
  // EXEMPLE 1
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
  };

  // EXEMPLE 2
  const [checked, setChecked] = useState(true);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <h1>Les formulaires</h1>

      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler 'les champs
        contrôlés'. En utilisant le 'onChange' et le 'value' d'une input et le
        hook useState(), nous pouvons mettre à jour une variable une variable à
        chaque changement (donc à chaque fois qu'un caractère est ajouté ou
        supprimé)
      </p>
      <h2>Exemple 1 :</h2>
      <input type="text" onChange={handleChange} value={inputValue} />
      {/* <input type="text" onChange={(e) => handleChange(e)} value={inputValue} /> */}
      <p>{inputValue}</p>
      <button onClick={() => setInputValue("")}>Vider le champ</button>

      <h2>Exemple 2 :</h2>
      <input type="checkbox" onChange={handleCheck} value={checked} />

      {checked ? <p>Case coché</p> : <p>Case non cochée</p>}
      {checked && <p>Elément affiché</p>}
    </>
  );
};
