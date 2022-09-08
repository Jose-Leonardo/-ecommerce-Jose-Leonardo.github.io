import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'
import PucharsesCard from './purchases/PucharsesCard'
const Purchases = () => {
  const [purchases, setpurchases] = useState()
  /**  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/"
    axios.get(URL, getConfig())
      .then(res => setpurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, []) */

  
  return (
    /**{
        purchases?.map(purchase => (
          <PucharsesCard key={purchase.id} purchase={purchase} />
        ))
      } */
    <div>
      
    </div>
  )
}

export default Purchases