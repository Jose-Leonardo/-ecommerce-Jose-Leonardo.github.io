import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCardInfo = ({products, getAddProductsCard}) => {

  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${products.id}`
    axios.delete(URL, getConfig())
      .then( () => getAddProductsCard())
      .catch(err => console.log(err))
  }

  return (
    <article className='cart__item'>
      <header className='cart__item-header'>
        <h4 className='cart__category'>{products.brand}</h4>
        <h3 className='cart__name'>{products.title}</h3>
      </header>
      <i className="fa-regular fa-trash-can"></i>
      <button onClick={handleDeleteProduct}>boton</button>
      <span className='cart__quantity'>{products.productsInCart.quantity}</span>
      <div>
        <span className='cart__total-label'>Total:</span>
        <p className='cart__total-number'>{products.price}</p>
      </div>
    </article>
  )
}

export default ProductCardInfo