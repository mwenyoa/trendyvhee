import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const resetPassword = createAsyncThunk(
    'password/confirm', async (user: {}) => {
        try{
            const response = await axios.post('/users/password', user, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const res = await response.data;            
            return res;
        } catch(error) {
            throw new Error(error.response.data)
        }
    }
)

export const newPassword = createAsyncThunk(
    'password/confirm', async (user: {}) => {
        try{
            const response = await axios.patch('/users/password', user, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const res = await response.data;
            if(response.status === 200) {
                
                return res;
            }
        } catch(error) {  
            throw new Error(error.response.data)
        }
    }
)