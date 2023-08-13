import React from 'react'
import Products from '../components/Products'
import { useEffect } from 'react'

function Shop() {
  useEffect(() => {
    document.title = "Shop | Mayur Perfumes"
  }, [])

  return (
    <Products/>
  )
}

export default Shop;