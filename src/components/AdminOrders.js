import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
import { fetchCartAsync, selectCart } from '../store/ordersSlice';
/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminOrders = () => {

  const dispatch = useDispatch()
  const orders = useSelector(selectCart)
  console.log(orders)
  useEffect(() => {
    dispatch(fetchCartAsync())
  }, [dispatch])



  return (
    <>
      <h1> User Orders</h1>
      <ul>{orders.map((order) => {
        return <li key={order.id}><h3>{order.cost}</h3> <h4>{order.shippingAddress}</h4></li>
      })}</ul>
    </>
  )
}

export default AdminOrders