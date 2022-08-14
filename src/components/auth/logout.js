import React from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/api";

export default function Logout({ setUser }) {
  
  const navigate = useNavigate();
  const handleLogout = async () => {
    const promise = account.deleteSession("current");
    promise.then(
      (response) => {
        console.log(response);
            setUser(null); // set current user to null
            navigate("/"); // navigate to login page
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
