import React, { useState } from "react";
import { databases } from "../../appwrite/api";
import { config as server } from "../../appwrite/appwrite.config";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function RecipeForm() {
  const navigate = useNavigate();
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
        window.alert(error.message);
        console.log(error.message);
      }
    );

    // splitting ingredients into an array and pushing into recipe object
    const ingr = ingredient.split(/[,\s]\s*/).map((item) => item.trim());
    console.log(ingr);
    setRecipe({ ...recipe, ingredients: ingr });
    // FIXME: ingredients are not being added to the recipe object in database, >> just seperate it using , its working

    navigate("/home"); // after submitting the form it will redirect to home page
  };

  return (
    // TODO: UI
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center font-bold text-2xl">Add new recipe</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleRecipeSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Food Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    placeholder="food name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setRecipe({ ...recipe, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="description"
                    onChange={(e) =>
                      setRecipe({ ...recipe, description: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ingredients"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ingredients
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="ingredient"
                    onChange={(e) => setIngredient(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="image url"
                    onChange={(e) =>
                      setRecipe({ ...recipe, image: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add new Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
