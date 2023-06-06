import React from 'react'

const ShoppingHeader = ({count,setShow}) => {
  return (
    <div className='shopping-header'>
        <h3 onClick={()=>setShow(true)}>My Shopping</h3>
        <div onClick={()=>setShow(false)}>
            <span>Cart 
                <sup>{count}</sup>
            </span>
        </div>
    </div>
  )
}

export default ShoppingHeader