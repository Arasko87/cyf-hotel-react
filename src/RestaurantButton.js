import React, { useState } from "react";

function RestaurantButton() {
  const [orders, setOrders] = useState(0);

  const OrderOne = () => {
    setOrders(orders + 1);
  };
  //   function OrderOne() {
  //     setOrders(orders + 1);
  //   }
  return (
    <div>
      Pizzas: {orders}
      <button onClick={OrderOne} className="btn btn-primary">
        {" "}
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
