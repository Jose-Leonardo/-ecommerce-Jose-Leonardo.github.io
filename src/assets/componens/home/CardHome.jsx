import axios from 'axios'
import React from 'react'
import {useNavigate} from "react-router-dom"
import getConfig from '../../utils/getConfig'
import './home-css.css'

const CardHome = ({producto}) => {

    const navigate = useNavigate()

    const HandleClic = () => {
        navigate(`/product/${producto.id}`)
    }

//se agrega contnido al ecommerce
    const handleAddCard = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const obj = {
            id: producto.id,
            quantity: 1
        }
        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
  return (
    <div onClick={HandleClic} className="Card-home">
        <header className="Card-home_header">
            <img src={producto.productImgs[0]} alt="" />
        </header>
        <hr />
        <h3>{producto.title}</h3>
        <div className='Card-home_body'>
            <div className="Card-home_div">
                <small>Prices</small>
                <section className='Card-home_price'>
                    <span>$ {producto.price} </span>
                </section>
            </div>
            <button className='Card-home_boton' onClick={handleAddCard}>boton</button>
        </div>
    </div>
  )
}

export default CardHome