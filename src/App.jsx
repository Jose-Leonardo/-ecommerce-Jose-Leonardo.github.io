import { useState } from 'react'
import './App.css'
import Home from './assets/componens/Home'
import { Routes, Route} from "react-router-dom"
import ProductDetail from './assets/componens/ProductDetail'
import Login from './assets/componens/Login'
import Purchases from './assets/componens/Purchases'
import Header from './assets/componens/shared/Header'
import Cart from './assets/componens/shared/Cart'
import ProtectedRoutes from "./assets/componens/ProtectedRoutes"
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/slice'
import { useEffect } from 'react'

function App() {
  /**useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const obj = {
      firstName: 'Leonardo',
      lastName: 'Garcia',
      email: 'augl020225@gmail.com',
      password: 'augl020225',
      phone: '3310880733',
      role: 'admin'
    }
    axios.post(URL, obj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []) */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>}/>

        <Route element={<ProtectedRoutes />}>

        <Route path="/purchases" element={<Purchases/>} />
        <Route path="/card" element={<Cart/>} />

        </Route>
    </Routes>
    </div>
  )  
}

export default App
