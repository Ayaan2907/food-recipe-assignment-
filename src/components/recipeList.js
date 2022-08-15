import React, { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";
import { databases } from "../appwrite/api";
import { config } from "../appwrite/appwrite.config";
export default function RecipeList() {
  const [recipies, setRecipies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getRecipiesPromise = databases.listDocuments(config.COLLECTION_ID);
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>Recipe list</div>
          {recipies &&
            recipies.map((recipe) => (
              <div key={recipe.$id}>
                <p> {recipe.name} </p>
              </div>
            ))}
          {/* <RecipeCard key={recipe.$id} recipe={recipe} /> */}
        </div>
      )}
    </>
  );
}
