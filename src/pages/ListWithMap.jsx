export const ListWithMap = () => {
  const users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 40, city: "Chicago" },
  ];

  const legumes = ["carottes", "oignons", "poivrons", "carottes"];

  return (
    <>
      <h1>Les listes avec .map()</h1>

      {users.map((user) => (
        <p key={user.id}>
          Nom: {user.name}, age: {user.age} , ville: {user.city}
        </p>
      ))}

      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.city}</li>
        </ul>
      ))}

      {/* On peut utiliser l'index, mais attention, React conseille de l'utiliser sur des liste 'statiques'
            --> Liste qui seront affichées et jamais modifiées
      */}
      <ul>
        {legumes.map((legume, idx) => (
          <li key={idx}>{legume}</li>
        ))}
      </ul>
    </>
  );
};
