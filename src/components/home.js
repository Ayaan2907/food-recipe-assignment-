import React from "react";
import RecipeList from "./recipeList";
import Navbar from "./Navbar/navbar";
export default function Home({ user, setUser }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <RecipeList />
    </>
  );
}
