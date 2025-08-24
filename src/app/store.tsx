import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/Login/LoginSlice'
import authReduce from '../features/auth/authSlice'
import dashboardReducer from '../features/Dashboard/dashboardSlice'
import boardReducer from '../features/Board/boardSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authReduce,
    dashboard: dashboardReducer,
    board: boardReducer
  },
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store