import React from "react";
import "CheckoutProoduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
      </div>
    </div>
  );
}
export default CheckoutProduct;
