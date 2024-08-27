import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const getProductThunk = createAsyncThunk(
    'product',
    async(credentials, thunkApi) => {
        try {
            const res = await api.get('product', credentials);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)