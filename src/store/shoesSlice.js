import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allShoes: [],
    athletic: [],
    casual: [],
    shoe: {},
    loading: true
}

export const fetchAthleticShoesAsync = createAsyncThunk("fetchAthleticShoesAsync", async () => {
    const { data } = await axios.get('/api/shoes/athletic')
    console.log("firing axios call fetch all shoes", data)
    return data
})

export const fetchCasualShoesAsync = createAsyncThunk("fetchCasualShoesAsync", async () => {
    const { data } = await axios.get('/api/shoes/casual')
    console.log("firing axios call fetch all shoes", data)
    return data
})

export const fetchSingleShoe = createAsyncThunk("fetchSingleShoe", async (id) => {
    const { data } = await axios.get(`/api/shoes/${id}`)
    console.log("single shoe returned:", data)
    return data
})
export const addShoes = createAsyncThunk("AddShoes ", async (shoe) => {
    const { data } = await axios.post('/api/shoes', shoe)
    console.log("firing axios call to add shoe", data)
    return data
})

export const fetchAllShoes = createAsyncThunk("fetchAllShoes", async () => {
    const { data } = await axios.get(`/api/shoes`)
    console.log("all shoes returned:", data)
    return data
})

export const deleteSingleShoe = createAsyncThunk("deleteSingleShoe", async (id) => {
    const { data } = await axios.delete(`/api/admin/${id}`)
    console.log("deleted shoe:", data)
    return data
})



export const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAthleticShoesAsync.pending, (state, action) => {
            console.log("Athletic Shoes are pending")
            state.loading = true
        })
        builder.addCase(fetchAthleticShoesAsync.fulfilled, (state, action) => {
            console.log('Athletic Shoes aqquired!')
            state.athletic = action.payload
            state.loading = false
        })
        builder.addCase(fetchCasualShoesAsync.pending, (state, action) => {
            console.log("Casual Shoes are pending")
            state.loading = true
        })
        builder.addCase(fetchCasualShoesAsync.fulfilled, (state, action) => {
            console.log('Casual Shoes aqquired!')
            state.casual = action.payload
            state.loading = false
        })
        builder.addCase(fetchSingleShoe.pending, (state, action) => {
            console.log('Fetching single shoe')
            state.loading = true
        })
        builder.addCase(fetchSingleShoe.fulfilled, (state, action) => {
            console.log("single shoe found")
            state.loading = false
            state.shoe = action.payload
        })
        builder.addCase(fetchAllShoes.fulfilled, (state, action) => {
            console.log("all shoes found")
            state.loading = false
            state.allShoes = action.payload
        })
        builder.addCase(deleteSingleShoe.fulfilled, (state, action) => {
            const shoe = action.payload
            for(let i = 0; i< state.allShoes.length ; i++) {
                if(state.allShoes[i].id === shoe.id) {
                    state.allShoes.splice(i,1)
                    console.log("shoe removed from all shoes")
                }
                if(state.athletic[i] === shoe.id) {
                    state.athletic.splice(i,1)
                    console.log("shoe removed from athletic")
                }
                if(state.casual[i] === shoe.id) {
                    state.casual.splice(i,1)
                    console.log("shoe removed from causal")
                }
            }
        })

        builder.addCase(addShoes.fulfilled, (state, action) => {
            console.log("shoe added", action.payload)
            const shoe = action.payload
            state.allShoes.push(shoe)
            if (shoe.type === "casual") {
                state.casual.push(shoe)
            } else if (shoe.type === "athletic") {
                state.athletic.push(shoe)
            }
        })
    }
})

export const selectAthletic = (state) => {
    return state.shoes.athletic
}

export const selectCasual = (state) => {
    return state.shoes.casual
}

export const selectShoe = (state) => {
    return state.shoes.shoe
}

export const selectAllShoes = (state) => {
    return state.shoes.allShoes
}

export default shoesSlice.reducer