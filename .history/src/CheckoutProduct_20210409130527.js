import React from "react";
import "CheckoutProoduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProcuct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}
export default CheckoutProduct;
