
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cart:[],
    orders: [],
    order: {},
    loading: true
}

export const fetchCartAsync = createAsyncThunk("fetchOrdersAsync", async(id)=>{
    console.log("firing axios call with id:", id)
    const { data } = await axios.get(`/api/orders/cart/${id}`)
    console.log("fetch cart:",data)
    return data
})

export const addToCart = createAsyncThunk('addToCart', async(order)=>{
    console.log("axios post request add to cart:", order)
    const {data} = await axios.post("/api/orders/addToCart", order)
    return data
})


export const removeFromCart = createAsyncThunk("removeFromCart", async (remove)=>{
    console.log(remove)
    const { data } = await axios.delete("/api/orders/remove", {data: remove})
    return data
})

export const updateQuant = createAsyncThunk("updateQuant", async (obj)=>{
    console.log("updating quantity with:", obj)
    const {data} = await axios.put("/api/orders/quantity", obj)
})


export const fetchOrdersHistoryAsync = createAsyncThunk("fetchOrdersHistoryAsync", async(id)=>{
    console.log("axios call for users order history", id)
    const { data } = await axios.get(`/api/orders/history/${id}`)
    console.log("fetch history:",data)
    return data
})


export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchCartAsync.pending, (state,action)=> {
            console.log("Orders are pending")
            state.loading = true
        })
        builder.addCase(fetchCartAsync.fulfilled, (state, action)=>{
            console.log('Orders aquired!')
            state.cart = action.payload
            state.loading = false 
        })
        builder.addCase(fetchOrdersHistoryAsync.fulfilled, (state, action)=>{
            console.log('History aquired!')
            state.cart = action.payload
            state.loading = false 
        })
    }

})

export const selectCart = (state) => {
    return state.orders.cart
}

export const selectCartTotal = (state) => {
    let total = 0
    state.orders.cart.map((order)=> {
        order.shoes.map(shoe => {
            total += shoe.order_shoe.unitPrice * shoe.order_shoe.quantity
        })
    })
    return total
}



export default ordersSlice.reducer