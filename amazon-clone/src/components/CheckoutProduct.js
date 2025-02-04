import React from "react";
import { useAuth } from "../context/GlobalState";

import "./CheckoutProduct.css";
import stars from "../Icones/star.png";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const { dispatch } = useAuth();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct-image" alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={stars} alt="" />
              </p>
            ))}
        </div>
        <button onClick={removeProduct}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
