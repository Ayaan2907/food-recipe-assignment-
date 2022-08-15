import React from "react";
import { Link } from "react-router-dom";
export default function RecipeCard({ recipe }) {
  return (
    <>
      <div>recipe</div>
      <Link to={`/recipe/${recipe.$collection}/${recipe.$id}`}>
        <p>{recipe.name}</p>
        <p>{recipe.description}</p>
        <p>{recipe.ingredients.map((item) => item)}</p>
        <img src={recipe.image} alt="" />
      </Link>
    </>
  );
}
