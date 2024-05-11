"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setlogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurant Login/Signup Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <div>
          <button className="button-link" onClick={() => setlogin(!login)}>
            {login
              ? "Do not have Account? SignUp"
              : "Already have Account? Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
