import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminOrders = () => {
  const [order, setOrder] = useState('')


  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> User Orders</h1>
      <div>
<section>
      <form onSubmit={handleSubmit}>
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
      </form>
      </section>
      </div>
      
    </>
  )
}

export default AdminOrders