import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'

const SimilarProducts = ({productoInfo}) => {

    const [filterProduts, setfilterProduts] = useState()

    const products = useSelector(state => state.products)
    console.log(products);
useEffect(() => {
    if (productoInfo) {
        const filter = products.filter( e => e.category.name === productoInfo.category)
        setfilterProduts(filter)
    }
}, [productoInfo])

    console.log(filterProduts)

  return (
    <div>
        {
            filterProduts?.map(product => {
                if (product.title !== productoInfo.title) {
                    return <CardHome 
                    key={product.id}
                    producto={product}
                    />
                }
            })
        }
    </div>
  )
}

export default SimilarProducts