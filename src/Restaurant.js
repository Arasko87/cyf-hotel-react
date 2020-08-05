import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <RestaurantButton />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
