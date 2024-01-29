// Import necessary functions from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { heyatNamineApi } from "../app/heyatNaminApi";

// Step 1: Define an async thunk for the Google sign-in process
export const signInWithGoogle = createAsyncThunk(
  "mainData/signInWithGoogle",
  async (googleUser) => {
    const response = await heyatNamineApi.googleSignIn(googleUser);
    return response.data;
  }
);

// Step 2: Update the mainDataSlice to handle Google sign-in
const mainDataSlice = createSlice({
  name: "mainData",
  initialState: {
    // ... other state fields ...
    user: null, // Step 3: Add a user field to the state
  },
  reducers: {
    // ... other reducers ...
  },
  extraReducers: (builder) => {
    builder
      // ... other cases ...
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // Store user data
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the reducer and any actions or selectors needed
export const { reducer } = mainDataSlice;
export default reducer;
