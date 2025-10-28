import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const displayInConsole = (text) => {
    console.log("Appuie sur le bouton " + text);
  };

  return (
    <section>
      <h1>Le hook use state</h1>

      <p>compteur: {count}</p>

      {/* Pour lier des fonctions à des propriétés de type évènements
            --> En créant les fonctions au dessus
      */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <br />
      <br />
      {/* Pour lier des fonctions à des propriétés de type évènements 
            --> En écrivant directement les fonction 'à la volée'
      */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* Pour passer un paramètre à un fonction qu'on a créé au dessus  */}
      <button onClick={() => displayInConsole("toto")}>
        Afficher dans la console
      </button>
    </section>
  );
}

export default HookUseState;
