import React, { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";
import { databases } from "../appwrite/api";
import { config } from "../appwrite/appwrite.config";
import "../styles/recipeList.css";
const RESULT_LENGTH = 100;
export default function RecipeList() {
  const [recipies, setRecipies] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getRecipiesPromise = databases.listDocuments(
      config.COLLECTION_ID,
      [],
      RESULT_LENGTH,
      0,
      "",
      "before",
      ["name"],
      ["ASC"]
    );
    getRecipiesPromise.then(
      (response) => {
        setRecipies(response.documents);
      },
      (error) => {
        console.log(error);
      }
    );
    setLoading(false);
  }, []);

  return (
    // TODO: UI
    <>
      <div>Recipe list</div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="recipeList">
          {recipies &&
            recipies.map((recipe) => (
              <RecipeCard key={recipe.$id} recipe={recipe} />
            ))}
        </div>
      )}
    </>
  );
}
