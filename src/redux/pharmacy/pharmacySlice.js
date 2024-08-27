import { createSlice } from "@reduxjs/toolkit";
import { getPharmacyThunk } from "./pharmacyThunk";

const initialState = {
  pharmacy: {
    name: "",
    address: "",
    city: "",
    phone: "",
    rating: null,
  },
  isLoading:false,
};

const pharmacySlices = createSlice({
    name:"pharmacy",
    initialState,
    extraReducers: (builder)=> {
        builder
        .addCase(getPharmacyThunk.fulfilled, (state, {payload}) =>{
            state.pharmacy = payload.pharmacy;
            state.isLoading=false;
        })
        .addCase(getPharmacyThunk.pending, (state, {payload}) =>{
            state.isLoading = true;
        })
        .addCase(getPharmacyThunk.rejected, (state, {payload}) =>{
            state.pharmacy = payload.pharmacy;
            state.isLoading=false;
        })
    },
});

export const pharmacyReducer = pharmacySlices.reducer;
