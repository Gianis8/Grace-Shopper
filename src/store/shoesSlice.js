import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    athletic: [],
    casual: [],
    shoe: {},
    loading: true
}

export const fetchAthleticShoesAsync = createAsyncThunk("fetchAthleticShoesAsync", async ()=>{
    const { data } = await axios.get('/api/shoes/athletic')
    console.log("firing axios call fetch all shoes", data)
    return data
})

export const fetchCasualShoesAsync = createAsyncThunk("fetchCasualShoesAsync", async ()=>{
    const { data } = await axios.get('/api/shoes/casual')
    console.log("firing axios call fetch all shoes", data)
    return data
})

export const fetchSingleShoe = createAsyncThunk("fetchSingleShoe", async (id)=> {
    console.log("firing axios call")
    const { data } = await axios.get(`/api/shoes/${id}`)
    console.log("single shoe returned:", data)
    return data
})



export const shoesSlice = createSlice({
    name:"shoes",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchAthleticShoesAsync.pending, (state,action)=> {
            console.log("Athletic Shoes are pending")
            state.loading = true
        })
        builder.addCase(fetchAthleticShoesAsync.fulfilled, (state, action)=>{
            console.log('Athletic Shoes aqquired!')
            state.athletic = action.payload
            state.loading = false
        })
        builder.addCase(fetchCasualShoesAsync.pending, (state,action)=> {
            console.log("Casual Shoes are pending")
            state.loading = true
        })
        builder.addCase(fetchCasualShoesAsync.fulfilled, (state, action)=>{
            console.log('Casual Shoes aqquired!')
            state.casual = action.payload
            state.loading = false
        })
        builder.addCase(fetchSingleShoe.pending, (state, action)=>{
            console.log('Fetching single shoe')
            state.loading = true
        })
        builder.addCase(fetchSingleShoe.fulfilled, (state,action)=>{
            console.log("single shoe found")
            state.loading = false
            state.shoe = action.payload
        })
    }
})

export const selectAthletic = (state) => {
    return state.shoes.athletic
}

export const selectCasual = (state) => {
    return state.shoes.casual
}

export const selectShoe = (state) =>{
    return state.shoes.shoe
}

export default shoesSlice.reducer