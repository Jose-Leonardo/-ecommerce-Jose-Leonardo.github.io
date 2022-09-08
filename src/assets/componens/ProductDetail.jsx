import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsDescription from './ProductDitails/ProductsDescription'
import SimilarProducts from './ProductDitails/SimilarProducts'

const ProductDetail = () => {

  const {id} = useParams()

  const [productInfo, setproductInfo] = useState()

  useEffect(() => {
   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
   axios.get(URL)
    .then(res => setproductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }, [])

  console.log(productInfo)
  

  return (
    <div>
      <ProductsDescription productoInfo={productInfo}/>
      <hr />
      <div className='similar-products'>
        <SimilarProducts productoInfo={productInfo} />
      </div>
      
    </div>

  )
}

export default ProductDetail