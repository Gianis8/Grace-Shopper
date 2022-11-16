import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store/authSlice'
import { selectUser, selectUsers } from '../store/usersSlice';
import { fetchUsersAsync } from '../store/usersSlice';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AdminUserData = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  console.log(users)
  useEffect(() => {
    dispatch(fetchUsersAsync())
  }, [dispatch])

  async function handleSubmit(evt) {
    evt.preventDefault()
  }

  return (
    <> 
    <section>
      <h1> User Data</h1>
      <ul>{users.map((user) => {
        return <li key={user.id}><h3>{user.username}</h3>{user.email}</li>
      })}</ul>
      </section>
    </>
  )
}

export default AdminUserData