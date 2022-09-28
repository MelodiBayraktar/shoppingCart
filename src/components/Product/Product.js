import React from 'react';
import "../Product/Product.css";

function Product(props) {
    const {product,onAdd} = props
  return (
    <div className='product'>
        <img className='small' src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <div>
            <button onClick={()=>onAdd(product)} className='btn'>Add To Cart</button>
        </div>
    </div>
  )
}

export default Product;