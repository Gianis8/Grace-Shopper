import React, {useState, useEffect} from 'react';
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

  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> User Orders</h1>
<section> 
      <ul>{orders.map((order) => {
        return <li key={order.id}><h3>{order.cost}</h3> <p>{order.shippingAddress}</p></li>
      })}</ul>
</section>
 {/* <div> */}
      {/* <form onSubmit={handleSubmit}>
        <h3>UserName</h3>
        <label htmlFor='order1'>Order1</label>
        <input type ='number' value={order} onChange={(evt) => setOrder(+evt.target.value)} />
        <label htmlFor='order2'>Order2</label>
        <input type ='number' value={order} onChange={(evt) => setOrder(+evt.target.value)} />
        <label htmlFor='order3'>Order3</label>
        <input type ='number' value={order} onChange={(evt) => setOrder(+evt.target.value)} />
        <label htmlFor='order4'>Order4</label>
        <input type ='number' value={order} onChange={(evt) => setOrder(+evt.target.value)} />
        <label htmlFor='order5'>Order5</label>
        <input type ='number' value={order} onChange={(evt) => setOrder(+evt.target.value)} />
      </form> */}
     
      {/* </div> */}
      
    </>
  )
}

export default AdminOrders