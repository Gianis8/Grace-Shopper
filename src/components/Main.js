import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HomePage, Athletic,Cart,Casual,Login } from '../components'

/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/athletic'>Athletic</NavLink>
        <NavLink to='/casual'> Casual</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
    
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/athletic' element={<Athletic />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/casual' element={<Casual />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
    
    </> 
   
  )
}

export default Main
