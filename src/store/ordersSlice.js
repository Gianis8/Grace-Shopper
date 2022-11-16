
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

export const addToCart = createAsyncThunk('addToCart', async (shoe)=>{
    console.log("axios post request add to cart")
    const {data} = await axios.post
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
        builder.addCase(fetchOrdersHisotryAsync.fulfilled, (state, action)=>{
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