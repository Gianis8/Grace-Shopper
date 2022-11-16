import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    user: {},
    loading: true,
    isAdmin: false
}

export const fetchUsersAsync = createAsyncThunk("fetchUsersAsync", async()=>{
    console.log("firing axios call fetch all users")
    const { data } = await axios.get('/api/users')
    console.log(data)
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
            const jsn = JSON.stringify(state.user.id)
            window.localStorage.setItem("id", jsn)
        })
    }

})

export const selectUsers = (state) => {
    return state.users.users
}
export const selectUser = (state) => {
    console.log(state.users)
    return state.users.user
}

export const selectAdmin = (state) => {
    return state.users.isAdmin
}

export default usersSlice.reducer