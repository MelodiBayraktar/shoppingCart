import React from 'react'
import "../Basket/Basket.css";
import "../Product/Product.css"
function Basket(props) {
  const {cartItems,onAdd, onRemove}=props;
  const itemsPrice = cartItems.reduce((a,c)=>a + c.price * c.qty, 0) 
  
  return (
    <aside className='special col-1'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <h3 className='center'>Cart is empty</h3>}
      </div>
      {cartItems.map((item)=>(
        <div key={item.id} className="row ">
          <div className='col-1 m-1'>{item.title}</div>
          <div className='col-2 m-1 buttons'>
            <button onClick={()=>onAdd(item)} className="add m-1">+</button>
            <button onClick={()=>onRemove(item)} className="remove m-1">-</button>  
          </div>
          <div className='col-2 right m-1'>
            {item.qty} * ${item.price.toFixed(2)}
          </div>
        </div>
       
      ))}
      {cartItems.length !== 0 && (
        <>
        <hr/>
        <div className='row'>
          <div className='col-2'><strong>Total Price</strong></div>
          <div className='col-1 right'><strong>${itemsPrice.toFixed(2)}</strong></div>
        </div>
        <div className='row'>
          <button className="buy" onClick={()=>alert("completed")}>Buy</button>
        </div>
        </>
      )}
    </aside>
  )
}

export default Basket