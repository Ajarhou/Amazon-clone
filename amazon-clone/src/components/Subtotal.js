import React from "react";
import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";

const Subtotal = () => {
  const { basket } = useAuth();
  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>
          {getBasketTotal(basket)} <small>$</small>
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={() => navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
