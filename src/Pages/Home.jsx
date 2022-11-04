import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
  const data = useSelector((state) => state.products)
 
  return (
    <div>Home</div>
  )
}

export default Home