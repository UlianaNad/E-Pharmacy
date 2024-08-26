import { createAsyncThunk } from '@reduxjs/toolkit';
//import Notiflix from 'notiflix';

import { api } from '../../api/api.js';
//import { NOTIFICATIONS, paramsForNotify } from '../../constants/notifications';
import { clearToken, setToken } from '../../configApi/setToken';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('users/register', credentials);
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
      const response = await api.post('users/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'user/update',
  async (newUserData, ThunkAPI) => {
    try {
      const { data } = await api.patch(`users/update`, newUserData);
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
    const savedToken = state.user.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkAPI.rejectWithValue('No token!');
    }
    try {
      const response = await api.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('users/logout');

      clearToken();
    } catch (error) {
    //  Notiflix.Notify.failure(NOTIFICATIONS.FAILURE.LOGOUT, paramsForNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'users/forgot-password',
  async (email, thunkAPI) => {
    try {
      const { data } = await api.post('users/forgot-password', { email });
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)


export const resetPassword = createAsyncThunk(
  'users/reset-password',
  async (data, thunkAPI) => {

    try {
      const response = await api.post('users/reset-password', data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
