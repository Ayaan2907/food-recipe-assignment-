import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../appwrite/api";
import Navbar from "./Navbar/navbar";

export default function RecipeDetails({ user, setUser }) {
  const { collectionId, recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipePromise = databases.getDocument(collectionId, recipeId);
    getRecipePromise.then(
      (response) => {
        console.log(response);
        setRecipe(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [collectionId, recipeId]);

  return (
    <>
      <div>recipeDetails</div>
      <Navbar user={user} setUser={setUser} />
      {recipe && (
        <>
          <img src={recipe.image} alt="" />
          <div>{recipe.name}</div>
          <div>{recipe.description}</div>
          <div>{recipe.ingredients[0]}</div>
        </>
      )}
    </>
  );
}
