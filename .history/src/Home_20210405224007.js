import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            rating={3}
            id={12345}
          />
          <Product
            title="Ill get her this"
            image="https://m.media-amazon.com/images/I/41+OcSh2YsL._AC_SY200_.jpg"
            rating={123450}
            id={123444}
            price={12.97}
          />
        </div>
        <div className="home_row">
          <Product
            title="A random product"
            price={100.99}
            id={12344}
            rating={5}
            image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
          />
          <Product
            image="https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg"
            title="Nathan is a good boy"
            id={123457}
            price={50.56}
            rating={2}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            title="Ashinedus gift to Nathan"
            price={20.56}
            id={123458}
            rating={6}
          />
        </div>
        <div className="home_row">
          <Product
            title="Shirt for Her"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
            id={123459}
            price={56.99}
            rating={7}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
