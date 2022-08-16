import React from "react";
import { Link } from "react-router-dom";
import Logout from "../auth/logout";
import "../../styles/navbar.css";
export default function navbar({ user, setUser }) {
  return (
    <>
      <nav className="navbar">
      <div>Hello: {user?.name}</div>
      <Link to="/home">Home</Link> <br />
      <Link to="/recipe/new">Add Recipe</Link>
        <Logout user={user} setUser={setUser} />
      </nav>
    </>
  );
}
