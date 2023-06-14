import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Mayur <span className="text">Perfumes</span></h1>
            <h2>Hada ka dalbo perfume ku xiiso galin doonna</h2>
            <Link to="/Shop">Shop Now</Link>
        </div>
    )
}

export default Home;