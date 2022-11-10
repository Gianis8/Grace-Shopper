import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    shoes: [],
    shoe: {},
    loading: true
}

export const fetchShoesAsync = createAsyncThunk("fetchShoesAsync", async ()=>{
    console.log("firing axios call fetch all shoes")
    const { data } = await axios.get('')
    return data
})

export const fetchSingleStudent = createAsyncThunk('fetchSingleStudent', async (id)=>{
    const { data } = await axios.get('')
    return data
})

export const shoesSlice = createSlice({
    name:"shoes",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchShoesAsync.pending, (state,action)=> {
            console.log("Shoes are pending")
            state.loading = true
        })
        builder.addCase(fetchShoesAsync.fulfilled, (state, action)=>{
            console.log('Shoes aqquired!')
            state.shoes = action.payload
            state.loading = false
        })
    }
})

export const selectShoes = (state) => {
    return state.shoes.shoes
}

export default shoesSlice.reducer