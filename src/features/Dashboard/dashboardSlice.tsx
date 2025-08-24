import { createSlice } from "@reduxjs/toolkit"

type Props = {

}
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    isOpenBoard: false
  },
  reducers: {
    openBoard: (state, action) => {
      state.isOpenBoard = action.payload
    }
  }
})
export const { openBoard } = dashboardSlice.actions
export default dashboardSlice.reducer