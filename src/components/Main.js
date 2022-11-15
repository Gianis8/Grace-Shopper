import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HomePage, Athletic,Cart,Casual,Login, AppRoutes,Admin } from '../components'
import SingleShoe from './SingleShoe'

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

        <NavLink to='/login'>Login/Signout</NavLink>
        <NavLink to='/cart'>Cart</NavLink>

        <NavLink to='/admin'>Admin</NavLink>

      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/athletic' element={<Athletic />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/casual' element={<Casual />} ></Route>
        <Route path='/login' element={<AppRoutes />} ></Route>
        <Route path='/shoe/:id' element={<SingleShoe/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>
      </Routes>
    
    </> 
   
  )
}

export default Main
