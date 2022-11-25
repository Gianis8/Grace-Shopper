import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartAsync, selectCart, selectCartTotal, removeFromCart, updateQuant, selectToggle } from '../store/ordersSlice'



const Cart = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(selectToggle)
  const user = window.localStorage.getItem("user")
  const foundUser = JSON.parse(user)
  

  useEffect(() => {
    dispatch(fetchCartAsync(foundUser.id))
  },[dispatch])

  const handleClick = (shoe, order) => {
    dispatch(removeFromCart({ shoeId: shoe.id, orderId: order.id }))
    dispatch(fetchCartAsync(foundUser.id))
  }

  const handleQuant =(shoeId,orderId, addMinus) => {
    const obj = {
      shoeId,
      orderId,
      addMinus
    }
    dispatch(updateQuant(obj))
    dispatch(fetchCartAsync(foundUser.id))
  }
  

  let cart = useSelector(selectCart)
  const total = useSelector(selectCartTotal)

  console.log(cart)

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
                      <div>
                        <h5>Quantity:{shoe.order_shoe.quantity}</h5>
                        <button value={1} onClick={(e) => {
                          e.preventDefault();
                          const plus = e.target.value
                          handleQuant(shoe.id, order.id, plus)
                        }}>+</button><span value={toggle}></span><button value={0} onClick={(e) => {
                          e.preventDefault();
                          const minus = e.target.value
                          handleQuant(shoe.id, order.id, minus)
                        }}>-</button>
                      </div>
                      <form>
                        <button onClick={(e) => { e.preventDefault(); handleClick(shoe, order) }}>Delete</button>
                      </form>
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