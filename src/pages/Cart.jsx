import React, { useEffect } from 'react'
import CartProducts from '../components/CartProducts'
import Payment from '../components/Payment';
import useShop from '../ShopContext';

function Cart() {
  const {products} = useShop();

  if(products.length <= 0) return <h1>Cart Is Empty...</h1>
  
  useEffect(() => {
    document.title = "Cart | Mayur Perfumes"
  }, [])
  
  return (
    <div className='cart-container'>
      <CartProducts/>
      <Payment/>
    </div>
  )
}

export default Cart;