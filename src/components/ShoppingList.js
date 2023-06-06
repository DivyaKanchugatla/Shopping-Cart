import React from 'react'

const ShoppingList = ({data,addToCart}) => {
  
     
  return (
    <div className='items'>
        {data.map((item) => {
            const {id,title,author,price,img,amount} = item
            return (
                <div key={id} className='item'>
                 <img src={img} alt="" width={200} height={250}/> 
                 
                 <h4>{title}</h4>
                 <p>{author}</p>
                 <p>Rs.{price} /-</p> 
                 
                 <button onClick={()=>addToCart(item,amount)}>Add To Cart</button>
                </div>
               
            )
        })}
    </div>
  )
}

export default ShoppingList