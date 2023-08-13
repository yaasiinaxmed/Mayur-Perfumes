import React from 'react'
import Products from '../components/Products'
import { useEffect } from 'react'

function Shop() {
  useEffect(() => {
    document.title = "Home | Mayur Perfumes"
}, [])

  return (
    <Products/>
  )
}

export default Shop;