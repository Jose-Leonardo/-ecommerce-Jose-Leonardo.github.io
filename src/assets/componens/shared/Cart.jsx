import React from 'react'
import { useState, useEffect } from 'react'
import ProductCardInfo from '../Card/ProductCardInfo'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
const Cart = () => {
  const [cartProducts, setCartProducts] = useState()

  const getAddProductsCard = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAddProductsCard()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
        street: "Grenn st. 1456",
        colony: "southwest",
        zipCode: 12345,
        city: "USA",
        references:"Some reference"
    }
    axios.post(URL, obj, getConfig())
        .then(res => {
          console.log(res.data)
          getAddProductsCard()
        })
        .catch(err => console.log(err))
}

  return (
    <section className='cart'>
      <h2 className='cart__title'>Cart</h2>
      {
        cartProducts?.map(product => (
          <ProductCardInfo key={product.id} products={product} getAddProductsCard={getAddProductsCard} />
        ))
      }
      <hr className='cart__hr' />
      <footer className='cart__footer'>
        <span className='cart__total-global-label'>Total:</span>
        <p className='cart__total-global-value'>1350</p>
        <button className='cart__btn' onClick={handleCheckout}>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart