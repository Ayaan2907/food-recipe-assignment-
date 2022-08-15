import "./App.css";
import { Routes, Route } from "react-router-dom";
import { account } from "./appwrite/api";
import Home from "./components/home";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import RecipeForm from "./components/Navbar/recipeForm";
import RecipeDetails from "./components/recipeDetails";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const getUserDataPromise = account.get();
    getUserDataPromise.then(
      (response) => {
        console.log(response);
        setUser(response);
      },
      (error) => {
        console.log(error);
        setUser(null);
      }
    );
  }, []);
  return (
    <>
        {/* FIXME:  check user logged in or not */}
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />}/>
        <Route path="/home" element={user ? <Home user={user} setUser={setUser} /> : <Login user={user} setUser={setUser} />}/>
        <Route path="/recipe/:collectionId/:recipeId" element={ user ? <RecipeDetails user={user} setUser={setUser} />: <Login user={user} setUser={setUser} />}/>
        <Route path="/recipe/new" element={ user ? <RecipeForm /> : <Login user={user} setUser={setUser} />}        />
      </Routes>
    </>
  );
}
export default App;
