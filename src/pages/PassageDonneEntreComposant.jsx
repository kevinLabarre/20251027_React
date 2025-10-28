export const PassageDonneEntreComposant = () => {
  // Ici, le composant parent

  const handleClick = () => {
    alert("J'ai cliqué");
  };

  return (
    <section>
      <h1>
        Appel d'un composant enfant, et passage de données entre composant
        parent et enfant
      </h1>
      <ComposantEnfant
        data="Texte créé sur le composant parent"
        buttonFct={handleClick}
      />

      <ComposantEnfant
        id="myId"
        className="myClass"
        data="Texte créé sur le composant parent"
        buttonFct={handleClick}
      />

      <Title>Mon titre</Title>
    </section>
  );
};

const ComposantEnfant = ({ data, buttonFct, ...props }) => {
  return (
    <>
      <p {...props}>
        Je suis le composant enfant. Et voici la donnée que l'on m'a passée :
        {data}
      </p>
      <button onClick={buttonFct}>Click on me</button>
    </>
  );
};

const Title = ({ children }) => {
  return <h1 className="MainTitle">{children}</h1>;
};
