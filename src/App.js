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
      <div>just dummy data in components</div>
      <div> available Routes
                <ul>
                    <li> / </li>
                    <li> /signup </li>
                    <li> /home </li>
                    <li> /recipes </li>
                    <li> /recipes/:id </li>
                </ul>

            </div>
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
