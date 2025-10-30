import { useForm } from "react-hook-form";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";

export const AjouterProduit = ({ handleAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addProduct } = useProducts();

  // 'resultForm' est un objet javascript contenant toutes les valeurs de nos inputs
  // Le nom des attributs de l'objet est le nom passé dans les registers
  const myHandleSubmit = (resultForm) => {
    console.log("submit", resultForm);
    addProduct(resultForm)
      .then((resp) => handleAdd(resp.data)) // Le json-server renvoie EN CAS DE REUSSITE, le produit nouvellement ajouté
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(myHandleSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Nom"
          {...register("name", {
            required: "le nom est obligatoire",
            maxLength: { value: 10, message: "10 caractères maximum" },
          })}
        />
        <span>{errors.name && errors.name.message}</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Category"
          {...register("category", {
            required: "la catégorie est obligatoire",
          })}
        />
        <span>{errors.category && errors.category.message}</span>
      </div>

      <div>
        <input
          type="number"
          placeholder="Price"
          {...register("price", {
            required: "le prix est obligatoire",
            min: { value: 0, message: "le prix ne peut pas être negatif" },
            valueAsNumber: true, // Si on ne met pas "valueAsNumber: true", le type de l'input sera 'string' et pas 'number'
          })}
        />
        <span>{errors.price && errors.price.message}</span>
      </div>
      <div>
        <input
          type="number"
          placeholder="Quantité"
          {...register("number", {
            required: "la quantité est obligatoire",
            min: { value: 0, message: "la quantité ne peut pas être negatif" },
            valueAsNumber: true, // Le type 'number' de l'input renvoie une 'string' par défaut, IL NOUS FAUT FORCER LE TYPE EN 'number'
          })}
        />
        <span>{errors.number && errors.number.message}</span>
      </div>
      <input type="text" placeholder="color" {...register("color")} />
      <br />
      <br />
      <button type="submit">Ajouter</button>
    </form>
  );
};
