import React from 'react'
import { useState } from 'react'
import "./productocss.css"
const ProductsDescription = ({productoInfo}) => {
  const [counter, setcounter] = useState(1)
  const handleMas = () => setcounter(counter + 1)
  const handleMenos = () => {
    if (counter - 1 >=  1){
        setcounter(counter - 1) 
    }
  }
    return (
    <article className='Product-description'>
      <article className='imagen'>
      <img src={productoInfo?.productImgs[0]} alt="" />
      <img src={productoInfo?.productImgs[1]} alt="" />
      <img src={productoInfo?.productImgs[2]} alt="" />
      </article>
        <h2>{productoInfo?.title} </h2>
        <p>{productoInfo?.description} </p>
        <div className='Product-description-boton'>
            <button onClick={handleMenos}>-</button>
            <h3>{counter} </h3>
            <button onClick={handleMas}>+</button>
        </div>
    </article>
  )
}

export default ProductsDescription