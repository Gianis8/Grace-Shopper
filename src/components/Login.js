import React ,{ useState } from 'react'
import { useDispatch } from 'react-redux'
// import {  Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault()

  }

  return (
    <>
      <h1> Login Page</h1>
      <div>
<section>
  
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(evt) => setName(evt.target.value)} />
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(evt) => setPassword(evt.target.value)} />
        <button type='enter'>Enter</button>
        <button type='guest'>Continue as Guest</button>
        <button type='admin'>Admin Login</button>
      </form>
      </section>
      </div>
    </>
  )
}

export default Login