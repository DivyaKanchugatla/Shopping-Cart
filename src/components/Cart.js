import React from 'react'
import TotalAmount from './TotalAmount';

const Cart = ({CART,quantityChange,quantityDecrease}) => {
   
    if (CART.length === 0) {
        return <p className='empty'>Your cart is empty.</p>;
      }
      
     

  return (   
    <div>
        {CART.map((item)=>{
            const {img,title,author,price,amount}=item
            return (
               
                <div className='cart-wrapper'>
                <div className='cart-item'>
                    <img src={img} alt="" width={50} height={50}/> 
                     <h4>{title}</h4>
                     <p>{author}</p>
                     <p>Rs.{price} /-</p> 
                </div>  
                <div className='quantity-buttons'>
                    <span onClick={()=>quantityDecrease(item)}>-</span>
                    <p>{amount}</p>
                    <span onClick={()=>quantityChange(item)}>+</span>
                </div>               
                
                </div>  
            )
        })}
        <TotalAmount CART={CART}/>
    </div>
  )
}

export default Cart