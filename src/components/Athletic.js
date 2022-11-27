import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAthleticShoesAsync, selectAthletic } from '../store/shoesSlice'
import { Link } from 'react-router-dom'

const Athletic = () => {
  const dispatch = useDispatch()
  const shoes = useSelector(selectAthletic)
  console.log("Athletic shoes in state:", shoes)

  useEffect(() => {
    console.log("useEffect Athltic page")
    dispatch(fetchAthleticShoesAsync())
  }, [dispatch])


  return (
    <div className="main">
      <h1 id="shopAthletic">Athletic</h1>
      <div id="athleticPage">
        <div className='labels'>
          <label>Filtering: </label>
          <select id="filter">
            <option value="price">Price</option>
            <option value="brand">Brand</option>
            <option value="sizes">Sizes</option>
          </select>
        </div>
        <div className='shoeLayout'>
          <ul id='athleticShoes'>
            {shoes.map((shoe) => {
              return <li key={shoe.id} className="athleticLi"><Link className='athleticLi' to={`/shoe/${shoe.id}`}><div className='athLeftLi'><h4>{shoe.name}</h4><img src={shoe.imageUrl} /></div><div><h5 className='shoeBrand'>{shoe.brand}</h5><p className="athP">{shoe.description}</p></div></Link></li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Athletic