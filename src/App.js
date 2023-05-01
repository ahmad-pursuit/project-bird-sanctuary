import React from "react";
import birdData from "./data/birds"
import { useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";
import Checkout from "./Checkout";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0)
  const [bonusItemList, setBonusItemList] = useState([])


  // click bird, add to cart
  function clickBird(bird) {
    setTotalPrice(totalPrice + bird.amount)
    setCart([...cart, bird])
  };


  // reset cart
  function clearCart() {
    setCart([])
    setTotalPrice(0)
    setDiscount(0)
    setBonusItemList([])
  };

  
  //
  function removeBird(bird, index) {
    const foundBird = cart.find(bird2 => bird2.id === bird.id);
    const newCartPage = [...cart]
    newCartPage.splice(index, 1);
    setCart(newCartPage);
    setTotalPrice(totalPrice - foundBird.amount)
  }

  return (
    <div className="card">
      <Cards clickBird={clickBird} birdData={birdData} />
      <Cart cart={cart} totalPrice={totalPrice} removeBird={removeBird} />
      <Checkout clearCart={clearCart} />
     
    </div>
  );
};

export default App;
