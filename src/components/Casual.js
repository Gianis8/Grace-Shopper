import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCasualShoesAsync, selectCasual } from '../store/shoesSlice'

const Casual = () => {
  const dispatch = useDispatch()

  const shoes = useSelector(selectCasual)

  useEffect(()=>{
    dispatch(fetchCasualShoesAsync())
  },[dispatch])

  
  console.log("casual shoes:",shoes)
  return (
    <>
    <h1> Casual Page</h1>
    <ul>
      {shoes.map((shoe)=>{
        return <li key={shoe.id}><h3>{shoe.name}</h3><img src={shoe.imageUrl}/></li>
      })}
    </ul>
    </>
  )
}

export default Casual