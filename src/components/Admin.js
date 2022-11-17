import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
import { AllShoes } from './index'   
import { Route, Routes } from 'react-router-dom';
import { AddShoes } from '../store/shoesSlice';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const Admin = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()
dispatch(AddShoes({
  name,
  size,
  price,
  brand,
  type,
  color,
}))

  }

  return (
    <>
      <h1> Admin Page</h1>
      <div>
<section>
<h1> Inventory</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='size'>Size</label>
        <input type ='number' value={size} onChange={(evt) => setSize(+evt.target.value)} />
        <label htmlFor='brand'>Brand</label>
        <input value={brand} onChange={(evt) => setBrand(evt.target.value)} />
        <label htmlFor='type'>Type </label>
        <input value={type} onChange={(evt) => setType(evt.target.value)} />
        <label htmlFor='price'>Price</label>
        <input type ='number' value={price} onChange={(evt) => setPrice(+evt.target.value)} />
        <label htmlFor='color'>Color</label>
        <input value={color} onChange={(evt) => setColor(evt.target.value)} />
        <button type='add-inventory'>Add to inventory</button>
      </form>
      <Routes>
        <Route path="/" element={<AllShoes />}>  
        </Route>
      </Routes>
      </section>
      </div>
      
    </>
  )
}

export default Admin