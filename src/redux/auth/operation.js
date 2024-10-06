import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://connections-api.goit.global';  


export const register = createAsyncThunk(
    'auth/register',
    async (userdata, thunkApi)=>{
        try {
            const response = await axios.post(`${API_URL}/users/signup`, userdata)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    } 
);


export const login = createAsyncThunk(
    'auth/login',
    async (userdata, thunkApi)=>{
        try {
            const response = await axios.post(`${API_URL}/users/login`, userdata);
            return response.data;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async(_, thunkApi)=>{
        localStorage.removeItem('token');
       
        try {
            await axios.post(`${API_URL}/users/logout`);
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi)=>{
       const token = localStorage.getItem('token');
if(!token) return thunkApi.rejectWithValue('No token found');

        try {
            const response = await axios.get(`${API_URL}/user`,{
                headers:{
                Authorization: `Bearer ${token}`,
            },
            });
            return response.data; 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)