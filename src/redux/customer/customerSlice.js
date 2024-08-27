import { createSlice } from '@reduxjs/toolkit';

import { setToken } from '../../api/setToken.js';

import {
  forgotPassword,
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  resetPassword,
  updateCustomerThunk,
} from './customerThunk.js';

const initialState = {
  customer: {
    customername: '',
    email: '',

  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const customerSlices = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setStateToken: {
      prepare: (token) => {
        setToken(token);
        return { payload: token };
      },
      reducer: (state, { payload }) => {
        state.token = payload;
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.customer = payload.customer;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.customer = initialState.customer;
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(updateCustomerThunk.fulfilled, (state, { payload }) => {
        state.customer = payload.customer;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.customer.email = action.payload;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.customer.password = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.customer = action.payload.customer;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.customer = action.payload.customer;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const customerReducer = customerSlices.reducer;
export const { setStateToken } = customerSlices.actions;