import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'


/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1>SignUp</h1>
      <div className='loginForm'>
        <section>
          <form onSubmit={handleSubmit}>
            <h3>SignUp</h3>
            <label htmlFor='username'>Username</label>
            <input value={username} onChange={(evt) => setUsername(evt.target.value)} />
            <label htmlFor='email'>Email</label>
            <input type='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
            <button type='Sign up'>Sign Up</button>
          </form>
        </section>
      </div>

    </>
  )
}

export default SignUp