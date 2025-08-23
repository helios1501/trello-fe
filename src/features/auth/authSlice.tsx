import { createSlice } from "@reduxjs/toolkit";

type User = { email: string; password: string; };
type AuthState = {
  token: string;
  user: User;
}
const STOREAGE_KEY: string = 'auth';

const loadPersist = () => {
  try {
    const data: string = window.localStorage.getItem(STOREAGE_KEY) || ""
    return JSON.parse(data) || { token: '', user: { email: '', password: '' } }
  } catch (error) {
    return { token: '', user: { email: '', password: '' } }
  }
}
const initialState: AuthState = loadPersist();

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      window.localStorage.setItem(STOREAGE_KEY, JSON.stringify(state))
    },
    logout: (state) => {
      state.token = "";
      state.user = { email: "", password: "" };
      window.localStorage.setItem(STOREAGE_KEY, '')
    }
  }
})
export const { setCredentials, logout } = slice.actions
export default slice.reducer