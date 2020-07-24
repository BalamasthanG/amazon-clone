import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          key="123451"
          id="123451"
          title="Apple iPhone 11 (64GB) - Black"
          price={63900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
        />
        <Product
          key="123452"
          id="123452"
          title="Apple iPhone 11 (128GB) - purple"
          price={69900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51oXVi%2BZhhL._SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key="123453"
          id="123453"
          title="Apple iPhone XR (64GB) - Black "
          price={56000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg"
        />
        <Product
          key="123454"
          id="123454"
          title="Apple AirPods"
          price={18900}
          rating={5}
          image="https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_SX480_SY360_.jpg"
        />
        <Product
          key="123455"
          id="123455"
          title="Apple Watch Series 5"
          price={73000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91aM%2BXkGDDL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key="123456"
          id="123456"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey "
          price={199900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
