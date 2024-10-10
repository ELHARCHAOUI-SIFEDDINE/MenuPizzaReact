import React from "react";

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="pizza-content">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span className="pizza-price">
          {pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price.toFixed(2)}`}
        </span>
      </div>
    </li>
  );
}

export default Pizza;
