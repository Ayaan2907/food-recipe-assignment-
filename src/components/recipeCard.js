import React from "react";
import { Link } from "react-router-dom";
import "../styles/recipeCard.css";
export default function RecipeCard({ recipe }) {
  return (
    <>
      <Link to={`/recipe/${recipe.$collection}/${recipe.$id}`} className="recipeCard">
        <img src={recipe.image} alt="" />
        <p>{recipe.name}</p>
        <p>{recipe.description}</p>
        <p>{recipe.ingredients.map((item) => item)}</p>
      </Link>
    </>
  );
}
