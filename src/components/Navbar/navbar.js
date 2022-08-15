import React from "react";
import { Link } from "react-router-dom";
import Logout from "../auth/logout";
export default function navbar({ user, setUser }) {
  return (
    <>
      <div>Hello: {user?.name}</div>
      <Link to="/home">Home</Link> <br />
      <Link to="/recipe/new">Add Recipe</Link>
      <Logout user={user} setUser={setUser} />
    </>
  );
}
