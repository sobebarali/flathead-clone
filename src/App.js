import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/all" element={<Shop />} />
        <Route path="/collections/all/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
