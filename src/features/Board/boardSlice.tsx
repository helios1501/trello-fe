import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload
    }
  }
})
export const { setOpen } = boardSlice.actions
export default boardSlice.reducer