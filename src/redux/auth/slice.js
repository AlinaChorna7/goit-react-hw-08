import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operation';

const initialState = {
    
        user: {
         name: null,
         email: null,
         },
         token: null,
        isLoggedIn: false,
         isRefreshing: false,
         loading: false,
         error: null,
        
        
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredential(state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            localStorage.setItem('token', action.payload.token);
        },
        clearCredentials(state){
state.user  = {name:null, email: null }
state.token = null;
state.isLoggedIn = false;
localStorage.removeItem('token');
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.loading = true;
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        })
        .addCase(register.rejected, (state,action)=>{
            state.error = action.payload;
            state.loading= false;
        })
        .addCase(login.pending, (state)=>{
            state.loading = true;
        })
        .addCase(login.fulfilled, (state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.loading = false;
        })
        .addCase(login.rejected, (state,action)=>{
          state.loading = false;
            state.error = action.payload;
        })
        .addCase(logout.pending,(state)=>{
            state.loading = true;
        })
        .addCase(logout.fulfilled, (state, action)=>{
            state.user  = {name:null, email: null }
            state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
        })
        .addCase(logout.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(refreshUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(refreshUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(refreshUser.rejected, (state, action)=>{
            state.loading =false;
            state.error = action.payload;
        })
    }
})

export const {setCredential, clearCredentials} = authSlice.actions;
export default authSlice.reducer;
