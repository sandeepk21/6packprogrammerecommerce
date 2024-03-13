import React from "react";
import { Link } from "react-router-dom";
import Productcard from "../components/Productcard";

function Home() {
  return (
    <div className="home">
      <section></section>
      <h1>
        Letest Product
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <Productcard productId={"1"} name="macbook" photo={"https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"} price={225} stock={25} handler={()=>{}}/>
        <Productcard productId={"1"} name="macbook" photo={"https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"} price={225} stock={25} handler={()=>{}}/>
        <Productcard productId={"1"} name="macbook" photo={"https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"} price={225} stock={25} handler={()=>{}}/>
      </main>
    </div>
  );
}

export default Home;
