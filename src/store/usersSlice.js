import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    user: {},
    loading: true
}

export const fetchUsersAsync = createAsyncThunk("fetchUsersAsync", async()=>{
    console.log("firing axios call fetch all users")
    const { data } = await axios.get('')
    return data
})

export const getUser = createAsyncThunk('getUser', async (username) => {
      const { data } = await axios.get(`/auth/${username}`)
      return data
    }
  )

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsersAsync.pending, (state,action)=> {
            console.log("Users are pending")
            state.loading = true
        })
        builder.addCase(fetchUsersAsync.fulfilled, (state, action)=>{
            console.log('Users aqquired!')
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            console.log('User found', action.payload)
            state.user = action.payload
        })
    }

})

export const selectUsers = (state) => {
    return state.users.users
}
export const selectUser = (state) => {
    return state.users.user
}

export default usersSlice.reducer