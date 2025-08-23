import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    email: "",
    code: ""
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.email = action.payload.email;
    }
  }
})
export const { login } = loginSlice.actions
export default loginSlice.reducer