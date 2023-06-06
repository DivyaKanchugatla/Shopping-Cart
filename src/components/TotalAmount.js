import React from 'react';

const TotalAmount = ({ CART}) => {
  const totalAmount = CART.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return <div className='total-amount'>Total Amount:   Rs.{totalAmount} /-</div>;
};

export default TotalAmount;
