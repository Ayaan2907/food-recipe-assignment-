import React, { useState } from "react";
import { account, databases } from "../appwrite/api";
import { config as server } from "../appwrite/appwrite.config";
import { v4 as uuid } from "uuid";
export default function RecipeForm({ user }) {
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    image: "",
    // createdBy: [account.$id, user.$id, account.id, user.id],
  });
  const handleRecipeSubmit = (e) => {
    e.preventDefault();
    const createDocumentPromise = databases.createDocument(
      server.COLLECTION_ID,
      uuid(),
      recipe,
      ["role:all"]
      // [`user:${account.$id}`]
    );
    createDocumentPromise.then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.message);
      }
    );

    // splitting ingredients into an array and pushing into recipe object
    const ingr = ingredient.split(/[,\s]\s*/).map((item) => item.trim());
    console.log(ingr);
    setRecipe({ ...recipe, ingredients: ingr });
    // FIXME: ingredients are not being added to the recipe object in database
  };

  return (
    // TODO: UI
    <>
      <div>recipeForm</div>
      <form onSubmit={handleRecipeSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) =>
            setRecipe({ ...recipe, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="ingredient"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <input
          type="text"
          placeholder="image url"
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </>
  );
}
