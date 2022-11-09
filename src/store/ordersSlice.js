import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    orders: [],
    order: {},
    loading: true
}

export const fetchOrdersAsync = createAsyncThunk("fetchOrdersAsync", async()=>{
    console.log("firing axios call fetch all orders")
    const { data } = await axios.get('')
    return data
})

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchOrdersAsync.pending, (state,action)=> {
            console.log("Orders are pending")
            state.loading = true
        })
        builder.addCase(fetchOrdersAsync.fulfilled, (state, action)=>{
            console.log('Orders aqquired!')
            state.orders = action.payload
            state.loading = false
        })
    }

})

export const selectOrders = (state) => {
    return state.orders.orders
}

export default ordersSlice.reducer