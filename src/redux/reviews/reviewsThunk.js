import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const getReviewsThunk = createAsyncThunk(
    'reviews',
    async(credentials, thunkApi) => {
        try {
            const res = await api.get('customer-reviews', credentials);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)