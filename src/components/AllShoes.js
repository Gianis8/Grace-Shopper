import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoes, selectAllShoes, deleteSingleShoe } from "../store/shoesSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AllShoes = () => {
    const dispatch = useDispatch()
    const shoes = useSelector(selectAllShoes)
    console.log(shoes)

    useEffect(() => {
        dispatch(fetchAllShoes())
    }, [])

    const handleDelete = async (e) => {
        console.log(e.target.value)
        const id = e.target.value
        console.log("event handler dispatch delete shoe:", id)
        dispatch(deleteSingleShoe(id))
        dispatch(fetchAllShoes())
    }

    return (
        <ul id="adminData">
            {shoes.map((shoe) => {
                return <li key={shoe.id} className="adminLi">
                    <Link to={`/shoe/${shoe.id}`}>
                        <h4>{shoe.name}</h4>
                        <h6>{shoe.brand}</h6>
                        <h6>{shoe.type}</h6>
                        <img src={shoe.imageUrl} />
                    </Link>
                    <Button value={shoe.id} className="deleteButton" onClick={(e)=>{handleDelete(e) }}>Remove from inventory</Button>
                </li>
            })}
        </ul>
    )
}

export default AllShoes