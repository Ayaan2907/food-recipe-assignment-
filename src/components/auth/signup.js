import React, { useEffect, useState } from "react";
import { account } from "../../appwrite/appwrite.config";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const userSignup = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );
    promise.then(
      (response) => {
        Console.log(response);
        navigate("/login");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return <div>signup</div>;
}
