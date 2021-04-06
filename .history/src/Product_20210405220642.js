import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <div className="product_rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
        alt=""
      ></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
