import React, { useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HomePage, Athletic, Cart, Casual, AppRoutes, Admin, AdminOrders, AdminUserData, SignUp } from '../components'
import SingleShoe from './SingleShoe'
import { selectUser, selectAdmin, setAdmin } from '../store/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

/* 
    This is you entry point for your routes
*/


const Main = () => {
  const dispatch = useDispatch()
  
  function checkAdmin(){
    const userAdmin = window.localStorage.getItem('user')
    const admin = JSON.parse(userAdmin)
    if(admin.isAdmin) {
      dispatch(setAdmin())
    }
  }
  
  useEffect(()=>{
    checkAdmin()
  })

  const isAdministrator = useSelector(selectAdmin)
  return (
    <>
      <nav>
        <span>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/athletic'>Athletic</NavLink>
        <NavLink to='/casual'>Casual</NavLink>
        {isAdministrator ? 
          <NavLink to='/admin'>Admin</NavLink>
          : null
        }
        </span>
        <span>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/cart'><span className="material-symbols-rounded">shopping_cart</span></NavLink>
        </span>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/athletic' element={<Athletic />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/casual' element={<Casual />} ></Route>
        <Route path='/login' element={<AppRoutes />} ></Route>
        <Route path='/shoe/:id' element={<SingleShoe />} ></Route>
        <Route path='/admin' element={<Admin />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/orders' element={<AdminOrders />} ></Route>
      </Routes>

    </>

  )
}

export default Main
