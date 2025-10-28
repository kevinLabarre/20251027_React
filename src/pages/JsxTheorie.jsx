import logoReact from "../assets/react.svg";

function JsxTheorie() {
  const title = "Bienvenue sur React";

  const displayTitle = () => {
    return "Bienvenue sur React";
  };

  const htmlTitle = <h1>Bienvenue sur React</h1>;

  const welcome = "Bonjour <strong>tout le monde</strong>, et bienvenue";

  const imgHref = "../src/assets/react.svg";

  const styleTitle = { color: "red", fontWeight: 400 };

  const displayText = true;

  return (
    <>
      {/* Lien pour la signature ! */}
      <a className="signature" href="https://moncompte.dawan.fr/connexion">
        Lien pour SIGNATURE
      </a>

      {/* Interpréter du javascript dans du jsx : en utilisant les '{}' */}
      <h1 className="title">Bienvenue sur React</h1>
      <h1>{title}</h1>
      <h1>{displayTitle()}</h1>
      {htmlTitle}
      <p>Résultat de 2 + 2 = {2 + 2}</p>

      {/* Pour interpréter comme du HTML ce qui est dans les '{}'  */}
      <p>{welcome}</p>
      <p dangerouslySetInnerHTML={{ __html: welcome }}></p>

      {/* Utilisation du javascript dans les propriétés des balises */}
      <img src="../src/assets/react.svg" alt="logo react" />
      <img src={imgHref} alt="logo react" />
      {/* Avec l'import ligne 2 (tout en haut) */}
      <img src={logoReact} alt="logo react" />

      {/* Pour styliser avec la balise style */}
      <h1 style={{ color: "red", fontWeight: 400 }}>Bienvenue sur React</h1>
      <h1 style={styleTitle}>Bienvenue sur React</h1>

      {/* Pour faire de l'affichage conditionnel */}
      {/* solution 1 : que du vrai (comme un if sans le else)  */}
      {displayText && <p>Texte affiché</p>}

      {/* solution 2 : on affiche également quelque chose quand la condition des fausse (equivalent d'un if + else)  */}
      {displayText ? <p>Texte affiché</p> : <p>Texte Masqué</p>}
    </>
  );
}

export default JsxTheorie;
