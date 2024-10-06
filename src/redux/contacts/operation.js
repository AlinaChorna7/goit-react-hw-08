import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.goit.global/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    const token = localStorage.getItem('token'); 
    console.log("Token:", token);
  
    if (!token) {
      return thunkApi.rejectWithValue('No token found');
    }
  
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      console.log("Contacts fetched:", response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
  

  export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkApi) => {
    const token = localStorage.getItem('token'); 
  
    if (!token) {
      return thunkApi.rejectWithValue('No token found');
    }
  
    try {
      const response = await axios.post(BASE_URL, newContact, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
  

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return thunkApi.rejectWithValue('No token found');
    }
  
    try {
      await axios.delete(`${BASE_URL}/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return contactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
  
