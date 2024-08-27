import { createSlice } from "@reduxjs/toolkit";
import { getPharmacyThunk, getNearestPharmacyThunk } from "./pharmacyThunk";

const initialState = {
  pharmacy: {
    name: "",
    address: "",
    city: "",
    phone: "",
    rating: null,
  },
  isLoading: false,
};

const pharmacySlices = createSlice({
  name: "pharmacy",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPharmacyThunk.fulfilled, (state, { payload }) => {
        state.pharmacy = payload.pharmacy;
        state.isLoading = false;
      })
      .addCase(getPharmacyThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getPharmacyThunk.rejected, (state, { payload }) => {
        state.pharmacy = payload.pharmacy;
        state.isLoading = false;
      })
      .addCase(getNearestPharmacyThunk.fulfilled, (state, { payload }) => {
        state.pharmacy = payload.pharmacy;
        state.isLoading = false;
      })
      .addCase(getNearestPharmacyThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getNearestPharmacyThunk.rejected, (state, { payload }) => {
        state.pharmacy = payload.pharmacy;
        state.isLoading = false;
      });
  },
});

export const pharmacyReducer = pharmacySlices.reducer;
