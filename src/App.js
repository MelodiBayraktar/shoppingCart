import React, { useState } from 'react';
import "./index.css";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import data from './data';

function App() {
  const {products} = data ;
  const [cartItems,setCartItems]=useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find(x=>x.id === product.id)
    if(exist){
      setCartItems(cartItems.map(x=>x.id===product.id?{...exist, qty: exist.qty + 1}: x));
    }else{
      setCartItems([...cartItems,{...product, qty:1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id ===product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=>x.id !==product.id));
    }else{
      setCartItems(cartItems.map(x=>x.id===product.id?{...exist, qty: exist.qty - 1}: x));
    }
  }
  return (
    <div className="App">
      <Navbar countCartItems={cartItems.length} />
      <div className='row'>
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
