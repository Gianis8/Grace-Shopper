import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCasualShoesAsync, selectCasual } from '../store/shoesSlice'
import { Link } from 'react-router-dom'

const Casual = () => {
  const dispatch = useDispatch()

  const shoes = useSelector(selectCasual)

  useEffect(() => {
    dispatch(fetchCasualShoesAsync())
  }, [dispatch])


  console.log("casual shoes:", shoes)
  return (
    <>
      <h1>Shop Casual</h1>
      <div className='shoeLayout'>
        <ul>
          {shoes.map((shoe) => {
            return <li key={shoe.id}><Link to={`/shoe/${shoe.id}`}><h3>{shoe.name}</h3><img src={shoe.imageUrl} /></Link></li>
          })}
        </ul>
      </div>
      <div className='labels'>
      <label>Filtering : </label>
      <select id="filter">
        <option value="price">Price</option>
        <option value="brand">Brand</option>
        <option value="sizes">Sizes</option>
      </select>
      </div>
    </>
  )
}

export default Casual