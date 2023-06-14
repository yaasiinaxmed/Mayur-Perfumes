import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="container">
      <Toaster  
      position="top-right"
      reverseOrder={false}/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
