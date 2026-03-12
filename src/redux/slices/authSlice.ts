import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        user: null
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLogin = true;
            state.user = action.payload
        },
        setLogout: (state) => {
            state.isLogin = false;
            state.user = null
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer