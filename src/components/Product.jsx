import { useEffect, useState } from "react"
import useShop from "../ShopContext"

const Product = ({product}) => {

    const { addToCart, removeFromCart, products} = useShop()
    const [isInCart, setIsInCart, ] = useState(false)

    useEffect(() => {
        const isCart = products.filter((pro) => pro.id == product.id)
        if(isCart.length > 0) {
            setIsInCart(true)
        }
        else {
            setIsInCart(false)
        }

    }, [products])

    const handleAddToCart = () => {
        if(isInCart) {
            removeFromCart(product);
        }
        else {
            addToCart(product);
        }
        // console.log(products)
    }

    return (
        <div key={product.id} className="card-product">
            <div className="img-box">
                <img src={product.urlImage} alt=""/>
            </div>
            <div className="info">
               <h2>{product.name}</h2>
               <span>${product.price}</span>
               <button className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
                  onClick={handleAddToCart}>
                    {isInCart ? "Remove Cart" : "Add Cart"}
                </button>
            </div>
        </div>
    )
}

export default Product