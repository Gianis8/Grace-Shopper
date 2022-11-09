/* Here is where you will configure the store 
    The store needs some reducer slices!
*/

import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersSlice'
import shoesSlice from './shoesSlice'
import ordersSlice from './ordersSlice'


// main redux store
const store = configureStore({
  reducer: {
    users: usersSlice,
    shoes: shoesSlice,
    orders: ordersSlice
  },
})

export default store
