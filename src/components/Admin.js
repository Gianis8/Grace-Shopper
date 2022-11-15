import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const Admin = () => {
  

  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> Admin Page</h1>
      <div>
<section>
  
      <form onSubmit={handleSubmit}>
        <h3>Admin</h3>
        <label htmlFor='name'>Name</label>
        <input  onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='name'>Name</label>
        <input  onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='name'>Name</label>
        <input  onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='name'>Name</label>
        <input  onChange={(evt) => setName(evt.target.value)} />
        <button type='add-inventory'>Add inventory</button>
        
      </form>
      </section>
      </div>
    </>
  )
}

export default Admin