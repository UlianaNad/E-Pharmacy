import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const getPharmacyThunk = createAsyncThunk(
    'stores',
    async(credentials, thunkApi) => {
        try {
            const res = await api.get('stores', credentials);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)