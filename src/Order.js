import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);

  const orderOnes = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton addOne={orderOnes} />
    </li>
  );
}

export default Order;
