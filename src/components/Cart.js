import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartAsync, selectCart } from '../store/ordersSlice'

const Cart = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCartAsync())
  },[dispatch])

  const cart =useSelector(selectCart)
  return (
    <>
    <h1> Cart Page</h1>
    <ul>
      {cart.map((order)=>{
        console.log(order)
        return (
          <li key={order.id} className="cartOrders"><h3>Order id#{order.id}</h3><ul className="shoesOfOrder">{order.shoes.map((shoe)=>{
            return (
              <li key={shoe.id} className="shoeInOrder"><h4>{shoe.name}</h4></li>
            )
          })}</ul><h5 className="orderCost">${order.cost}</h5></li>
        )
      })}
    </ul>
    </>
  )
}

export default Cart