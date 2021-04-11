import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://i.pinimg.com/originals/e9/c5/6a/e9c56a9cb76ff557a8568234e9333a7a.png"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
