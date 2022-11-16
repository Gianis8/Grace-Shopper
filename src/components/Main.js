import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HomePage, Athletic, Cart, Casual, AppRoutes, Admin, AdminOrders, AdminUserData, SignUp } from '../components'
import SingleShoe from './SingleShoe'
import { selectUser, selectAdmin } from '../store/usersSlice'
import { useSelector } from 'react-redux'

/* 
    This is you entry point for your routes
*/
const Main = () => {
  const admin = useSelector(selectAdmin)
  const user = useSelector(selectUser)
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/athletic'>Athletic</NavLink>
        <NavLink to='/casual'> Casual</NavLink>
        {admin ? 
          <NavLink to='/admin'>Admin</NavLink>
          : null
        }
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/cart'>Cart</NavLink>

      </nav>
      <Routes>

        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/athletic' element={<Athletic />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/casual' element={<Casual />} ></Route>
        <Route path='/login' element={<AppRoutes />} ></Route>
        <Route path='/shoe/:id' element={<SingleShoe />} ></Route>
        <Route path='/admin' element={<><Admin /> <AdminOrders /> <AdminUserData /></>} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
      </Routes>

    </>

  )
}

export default Main
