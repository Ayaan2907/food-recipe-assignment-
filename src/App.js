import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import RecipeDetails from "./components/recipeDetails";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<Navigate to='/home' />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}
export default App;
