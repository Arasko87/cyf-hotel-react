import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.addOne} className="btn btn-primary">
      {" "}
      Add
    </button>
  );
}

export default RestaurantButton;
