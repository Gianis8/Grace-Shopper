/* Here is where you will configure the store 
    The store needs some reducer slices!
*/

import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import shoesSlice from './shoesSlice'
import ordersSlice from './ordersSlice'
import authReducer from './authSlice'


// main redux store
const store = configureStore({
  reducer: {
    users: usersSlice,
    shoes: shoesSlice,
    orders: ordersSlice,
    auth: authReducer,
  },
})

export default store
