import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
  user: {},
 
}
export const CreateUserThunk = createAsyncThunk("CreateUserThunk", async (user) => {
  console.log("firing axios call to create user")
  const { data } = await axios.post('/api/users', user )
  console.log(data, "i am here")
  return data
})

export const SignUpSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateUserThunk.fulfilled, (state, action) => {
      console.log("Users are pending", action.payload)
      state.user = action.payload
      
    })

  }
})
export const signUpUser = (state) => {
  console.log(state.users)
  return state.user.user
}
export default SignUpSlice.reducer