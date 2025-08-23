import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/Login/LoginSlice'
import authReduce from '../features/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authReduce
  },
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store