import { Link, useLocation } from "react-router-dom";
import "../style.css"
import { useState } from "react";
import useShop from "../ShopContext";

const Header = () => {
    const {products} = useShop();
    const location = useLocation();
    const [menu , setMenu] = useState();

    return (
        <div className="menu">
            <Link to="/" className="logo"><span style={{color: "#222"}}>Mayur</span> Perfumes</Link>
            <div className="menu-mobile" onClick={() => setMenu(!menu)}>
                {menu ? <ion-icon name="close"></ion-icon> : <ion-icon name="menu"></ion-icon>}
            
            </div>
            <dv className={`Links ${menu ? 'active' : ''}`}>
               <Link to="/" className={`${location.pathname === "/" ? 'active' : ""}`}>Home</Link>
               <Link to="/Shop" className={`${location.pathname === "/Shop" ? 'active' : ""}`}>Shop</Link>
               <Link to="/Cart" className={`${location.pathname === "/Cart" ? 'active' : ""}`}>Cart</Link>
            </dv>
            <Link to="/Cart" className="cart-box">
                <ion-icon name="cart"></ion-icon>
                <span className="cart">{products.length}</span>
              </Link>
        </div>
    )
};

export default Header;