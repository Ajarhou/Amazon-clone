import React from "react";
import checkoutAd from "../images/checkoutAd.jpg";
import "./Checkout.css";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutAd} className="checkout-ad" />
        <div className="">
          <h3>hello,{user?.email}</h3>
          <h2 className="checkout-title">Your shoping Bascket </h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
