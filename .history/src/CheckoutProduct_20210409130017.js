import React from "react";
import "CheckoutProoduct.css";
function CheckoutProduct({id, title, image, price, rating}) {
  return <div className="CheckoutProduct">
      <img src={image} className='CheckoutProduct_image'
      />
      <div className='CheckoutProduct_info'>
  </div>;
}
export default CheckoutProduct;
