import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchSingleShoe, selectShoe } from "../store/shoesSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/ordersSlice";

const SingleShoe = ()=>{
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log("id returned from params:", id)
    const shoe = useSelector(selectShoe)

    useEffect(()=>{
        dispatch(fetchSingleShoe(id))
    },[dispatch])

    const handleClick = async (e) => {
        console.log(shoe)
        dispatch(addToCart(shoe))
    }
    return (
        <>
        <h1>{shoe.name}</h1>
        <img src={shoe.imageUrl}/>
        <h3>{shoe.brand}</h3>
        <h2>${shoe.price}</h2>
        <label>Size: </label>
        <select>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <h3>Color: {shoe.color}</h3>
        <p>{shoe.description}</p>
        <button onClick={handleClick}>Add to Cart</button>

        </>
    )
}

export default SingleShoe