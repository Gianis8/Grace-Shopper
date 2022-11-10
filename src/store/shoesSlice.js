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
    }
})

export const selectAthletic = (state) => {
    return state.shoes.athletic
}

export const selectCasual = (state) => {
    return state.shoes.casual
}
export default shoesSlice.reducer