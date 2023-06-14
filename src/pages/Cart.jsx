import React from 'react'
import CartProducts from '../components/CartProducts'
import Payment from '../components/Payment';
import useShop from '../ShopContext';

function Cart() {
  const {products} = useShop();
  
  return (
    <div className='cart-container'>
     
      {products.length == 0 ? <p style={{color: "#555", fontSize: "20px"}}>Cart Is Empty.... </p> :  <CartProducts/>}
      <Payment/>
    </div>
  )
}

export default Cart;