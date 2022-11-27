import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
import { selectUser, selectUsers } from '../store/usersSlice';
import { fetchUsersAsync } from '../store/usersSlice';
import { Link } from 'react-router-dom';
/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminUserData = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  useEffect(() => {
    dispatch(fetchUsersAsync())
  }, [dispatch])

  async function handleSubmit(evt) {
    evt.preventDefault()
  }

  return (
    <>
      <h3 id="h3userData"> User Data</h3>
      <ul id='adminData'>{users.map((user) => {
        return <li className="adminLi" key={user.id}><Link to={`/orders`}><h5>{user.username}</h5><h6>{user.email}</h6></Link></li>
      })}</ul>
    </>
  )
}

export default AdminUserData