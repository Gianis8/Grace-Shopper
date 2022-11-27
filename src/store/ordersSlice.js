
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cart: [],
    orders: [],
    order: {},
    toggle: 0,
    loading: true,
}

export const fetchCartAsync = createAsyncThunk("fetchOrdersAsync", async (id) => {
    const { data } = await axios.get(`/api/orders/cart/${id}`)
    return data
})

export const addToCart = createAsyncThunk('addToCart', async (order) => {
    const { data } = await axios.post("/api/orders/addToCart", order)
    return data
})

export const removeFromCart = createAsyncThunk("removeFromCart", async (remove) => {
    const { data } = await axios.delete("/api/orders/remove", { data: remove })
    return data
})

export const updateQuant = createAsyncThunk("updateQuant", async (obj) => {
    const { data } = await axios.put("/api/orders/quantity", obj)
    return data
})


export const fetchOrdersHistoryAsync = createAsyncThunk("fetchOrdersHistoryAsync", async (id) => {
    const { data } = await axios.get(`/api/orders/history/${id}`)
    return data
})


export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCartAsync.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCartAsync.fulfilled, (state, action) => {
            state.cart = action.payload
            state.loading = false
        })
        builder.addCase(fetchOrdersHistoryAsync.fulfilled, (state, action) => {
            console.log(action.payload)
            state.orders = action.payload
            state.loading = false
        })
        builder.addCase(updateQuant.fulfilled, (state, action) => {
            console.log("payload", action.payload)
            for(const shoe of state.cart[0].shoes) {
                if (shoe.id === action.payload.shoeId) {
                    shoe.order_shoe.quantity = action.payload.quantity
                }
            }
        })
        builder.addCase(removeFromCart.fulfilled, (state,action)=>{
            const shoes = state.cart[0].shoes
            console.log("payload", action.payload)
            for(let i=0; i<shoes.length; i++) {
                if(shoes[i].id === action.payload.shoeId) {
                    state.cart[0].shoes.splice(i,1)
                }
            }
        })
    }
})

export const selectCart = (state) => {
    return state.orders.cart
}

export const selectCartTotal = (state) => {
    let total = 0
    state.orders.cart.map((order) => {
        order.shoes.map(shoe => {
            total += shoe.order_shoe.unitPrice * shoe.order_shoe.quantity
        })
    })
    return total
}

export const selectToggle = (state) => {
    return state.orders.toggle
}

export const selectOrders = (state) => {
    return state.orders.orders
}

export default ordersSlice.reducer