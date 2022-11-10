import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAthleticShoesAsync, selectAthletic } from '../store/shoesSlice'

const Athletic = () => {
const dispatch = useDispatch()
const shoes = useSelector(selectAthletic)
console.log("Athletic shoes in state:", shoes)

useEffect(()=>{
  console.log("useEffect Athltic page")
  dispatch(fetchAthleticShoesAsync())
},[dispatch])

  return (
    <>
      <h1> Athletic Page</h1>
      <ul>{shoes.map((shoe) =>{
        return <li key={shoe.id}><h3>{shoe.name}</h3><img src={shoe.imageUrl}/></li>
      })}</ul>
    </>
    
  )
}

export default Athletic