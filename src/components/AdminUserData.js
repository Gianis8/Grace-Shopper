import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminUserData = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [order, setOrders] = useState('')
  const [phone, setPhone] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> User Data</h1>
      <div>
<section>
      <form onSubmit={handleSubmit}>
        <h3>User Data</h3>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='address'>Address</label>
        <input  value={address} onChange={(evt) => setAddress(evt.target.value)} />
        <label htmlFor='order'>Orders</label>
        <input  value={order} onChange={(evt) => setOrders(+evt.target.value)} />
        <label htmlFor='color'>Phone Number</label>
        <input type = 'number'value={phone} onChange={(evt) => setPhone(+evt.target.value)} />
      </form>
      </section>
      </div>
      
    </>
  )
}

export default AdminUserData