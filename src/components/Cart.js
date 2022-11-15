import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartAsync, selectCart, selectCartTotal } from '../store/ordersSlice'

const Cart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartAsync())
  }, [dispatch])

  const cart = useSelector(selectCart)
  const total = useSelector(selectCartTotal)
  console.log(cart, "total:", total)
  return (
    <>
      <h1> Cart </h1>
      {cart.map((order) => {
        return (
          <div key={order.id} className="cart">
            <ul className="cartList">
              {order.shoes.map((shoe) => {
                return (
                  <li key={shoe.id} className="shoeInCart">
                    <div className='cartLiLeft'>
                      <img src={shoe.imageUrl} className="cartImg"></img>
                      <h4>{shoe.name}</h4>
                    </div>
                    <div className='cartLiRight'>
                      <h4>Unit Price:{shoe.order_shoe.unitPrice}</h4>
                      <h5>Quantity:{shoe.order_shoe.quantity}</h5>
                      
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="cartCheckout">
            <h2 >Total ${total}</h2><button id="order">Order</button>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default Cart