import React from 'react'
import RecipeList from './recipeList'
import Logout from './auth/logout';
export default function Home({user, setUser}) {
    return (
      <>
            <div>home</div>
      <RecipeList />
      <Logout user={user} setUser={setUser} />
      </>
  );
}
