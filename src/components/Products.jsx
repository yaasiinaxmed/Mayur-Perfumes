import React from 'react'
import Product from './Product'
import Footer from './Footer';

const products = [
    {
		id: 1,
		name: "Dirham Perfume",
		urlImage: "https://i.dummyjson.com/data/products/15/2.jpg",
		price: 18,
	},
	{
		id: 2,
		name: "Fragrance Bundle",
		urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOsoxK-o0XFlG08xJtmNOGH3xi5V6mDdbpXf-7gf4hZMN6Npkl-V_D9l5qx7qzDOt834&usqp=CAU",
		price: 12,
	},
	{
		id: 3,
		name: "Channel Perfume",
		urlImage: "https://i.dummyjson.com/data/products/15/4.jpg",
		price: 7,
	},
	{
		id: 4,
		name: "Brown Perfume",
		urlImage: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
		price: 6,
	},
	{
		id: 5,
		name: "Fog Scent Perfume",
		urlImage: "https://i.dummyjson.com/data/products/13/2.png",
		price: 4,
	},
	{
		id: 6,
		name: "Base Camp Cologn",
		urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCe0V6R5eRPwiIvdV_syDuQ51vOB-wiQovQ&usqp=CAU",
		price: 30,
	},
];

function Products() {
  return (
    <div className='container-products'>
    {products.map(product => (
		<Product key={product.id} product={product} />
    ))
	}
    <Footer/>
    </div>
  )
};

export default Products;