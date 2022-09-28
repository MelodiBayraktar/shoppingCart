import React from 'react';
import "../Navbar/Navbar.css";
function Navbar(props) {
  const {countCartItems} = props;
  return (
    <navbar>
        <div className='row special'>
           <div>
                <h1>Shopping Cart</h1>
           </div>
           <div>
                <h2><a href='/cart'>Cart {" "}
                {countCartItems ? (
                  <button className='badge'>{countCartItems}</button>
                ): (
                  " "
                )}</a></h2>
           </div>
        </div>
    </navbar>
  )
}

export default Navbar