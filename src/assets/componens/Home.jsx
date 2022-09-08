import React from 'react'
import { useSelector } from 'react-redux'
import CardHome from './home/CardHome'
import './home/home-css.css'
const Home = () => {


  const products = useSelector(state => state.products)

  return (
    <div className="home-Productos">
      {
        products?.map(product => (
          <CardHome key={product.id} producto={product}/>
        ))
      }
      
    </div>
  )
}

export default Home