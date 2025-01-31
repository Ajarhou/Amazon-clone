import React from "react";
import "./Product.css";
import star from "../Icones/star.png";
import { useAuth } from "../context/GlobalState";

const Product = ({ id, image, price, title, rating }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={star} />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" className="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
