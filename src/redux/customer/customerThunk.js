import { createAsyncThunk } from '@reduxjs/toolkit';
//import Notiflix from 'notiflix';

import { api } from '../../api/api.js';
//import { NOTIFICATIONS, paramsForNotify } from '../../constants/notifications';
import { clearToken, setToken } from '../../api/setToken.js';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('user/register', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('user/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateCustomerThunk = createAsyncThunk(
  'customer/update',
  async (newCustomerData, ThunkAPI) => {
    try {
      const { data } = await api.patch(`user/update`, newCustomerData);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.customer.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkAPI.rejectWithValue('No token!');
    }
    try {
      const response = await api.get('customers/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('customers/logout');

      clearToken();
    } catch (error) {
    //  Notiflix.Notify.failure(NOTIFICATIONS.FAILURE.LOGOUT, paramsForNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'user/forgot-password',
  async (email, thunkAPI) => {
    try {
      const { data } = await api.post('customers/forgot-password', { email });
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)


export const resetPassword = createAsyncThunk(
  'user/reset-password',
  async (data, thunkAPI) => {

    try {
      const response = await api.post('customers/reset-password', data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
