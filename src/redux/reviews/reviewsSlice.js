import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk } from "./reviewsThunk.js";

const initialState = {
  reviews: {
    name: "",
    testimonial: "",
  },
  isLoading:false,
};

const reviewsSlices = createSlice({
    name:"reviews",
    initialState,
    extraReducers: (builder)=> {
        builder
        .addCase(getReviewsThunk.fulfilled, (state, {payload}) =>{
            state.reviews = payload.reviews;
            state.isLoading=false;
        })
        .addCase(getReviewsThunk.pending, (state, {payload}) =>{
            state.isLoading = true;
        })
        .addCase(getReviewsThunk.rejected, (state, {payload}) =>{
            state.reviews = payload.reviews;
            state.isLoading=false;
        })
    },
});

export const reviewsReducer = reviewsSlices.reducer;
