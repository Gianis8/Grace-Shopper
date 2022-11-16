import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const Admin = () => {
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> Admin Page</h1>
      <div>
<section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='size'>Size</label>
        <input type ='number' value={size} onChange={(evt) => setSize(+evt.target.value)} />
        <label htmlFor='price'>Price</label>
        <input type ='number' value={price} onChange={(evt) => setPrice(+evt.target.value)} />
        <label htmlFor='color'>Color</label>
        <input value={color} onChange={(evt) => setColor(evt.target.value)} />
        <button type='add-inventory'>Add to inventory</button>
      </form>
      </section>
      </div>
      
    </>
  )
}

export default Admin