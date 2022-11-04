import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home'
import Shop from './Pages/Shop'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/all" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
