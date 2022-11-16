import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
import { CreateUserThunk, signUpUser } from '../store/SignUpSlice';
import { useParams } from "react-router-dom";



/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const SignUp = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const dispatch = useDispatch();
  const user = useSelector(signUpUser)
  async function handleSubmit(evt) {
    evt.preventDefault()
    console.log(username, email,password)
dispatch(CreateUserThunk(
  {
    username,
    email,
    password,
    isAdmin:false,
  }
))
  }

  return (
    <>
      <h1>SignUp Page</h1>
      <div>
<section>
      <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
        <label htmlFor='username'>Username</label>
        <input value={username} onChange={(evt) => setUsername(evt.target.value)} />
        <label htmlFor='email'>Email</label>
        <input type ='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type ='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
        <label htmlFor='address'>Address</label>
        <input  value={address} onChange={(evt) => setAddress(evt.target.value)} />
        <button type='Sign up'>Sign Up</button>
      </form>
      </section>
      </div>
      
    </>
  )
}

export default SignUp