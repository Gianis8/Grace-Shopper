import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

const Logout = () => {
  const dispatch = useDispatch()

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(logout());
    };

  return (
  <div className='logoutButtonDiv'>
    <button className='logoutButton' onClick={handleLogout}>Logout</button>
  </div>
  )
}

export default Logout