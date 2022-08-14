import "./App.css";
import { Routes, Route} from "react-router-dom";
import { account } from "./appwrite/api";
import Home from "./components/home";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

import RecipeDetails from "./components/recipeDetails";
import { useEffect, useState } from "react";
function App() {
  // const [loading, setLoading] = useState(true);
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
        // setLoading(false);
      },
      (error) => {
        console.log(error);
        setUser(null);
        // setLoading(false);
      }
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        {/* FIXME:  check user logged in or not */}
        <Route
          path="/home"
          element={
            user ? (
              <Home user={user} setUser={setUser} />
            ) : (
              <Login user={user} setUser={setUser} />
            )
          }
        />
        {/* FIXME:  following route is rendering home, but why?*/}
        <Route
          path="/recipe/:recipeId"
          element={
            user ? <RecipeDetails /> : <Login user={user} setUser={setUser} />
          }
        />
      </Routes>
    </>
  );
}
export default App;
