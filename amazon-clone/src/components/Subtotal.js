import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import './Subtotal.css';


const Subtotal = () => {
  const navigate= useNavigate();
  const { basket } = useAuth();
   const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => {
      return amount + item.price;
    }, 0);

  console.log("total is", getBasketTotal(basket));

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):<strong>{getBasketTotal(basket)} <small>$</small></strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox"/>This order contains a gift
      </small>
      <button onClick={()=>navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
