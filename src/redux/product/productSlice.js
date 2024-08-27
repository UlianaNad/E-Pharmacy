import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "./productThunk";

const initialState = {
  product: {
    name: "",
    address: "",
    city: "",
    phone: "",
    rating: null,
  },
  isLoading:false,
};

const productSlices = createSlice({
    name:"product",
    initialState,
    extraReducers: (builder)=> {
        builder
        .addCase(getProductThunk.fulfilled, (state, {payload}) =>{
            state.product = payload.product;
            state.isLoading=false;
        })
        .addCase(getProductThunk.pending, (state, {payload}) =>{
            state.isLoading = true;
        })
        .addCase(getProductThunk.rejected, (state, {payload}) =>{
            state.product = payload.product;
            state.isLoading=false;
        })
    },
});

export const productReducer = productSlices.reducer;
