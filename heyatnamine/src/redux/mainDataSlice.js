// Import necessary functions from Redux Toolkit
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { heyatNamineApi } from "../app/heyatNaminApi";

const mainDataAdapter = createEntityAdapter({
  selectId: (data) => data.id,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});

// Step 1: Define an async thunk for the Google sign-in process
export const signInWithGoogle = createAsyncThunk(
  "mainData/signInWithGoogle",
  async (googleUser) => {
    const response = await heyatNamineApi.googleSignIn(googleUser);
    return response.data;
  }
);

const mainAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.id - b.id,
});

// Step 2: Update the mainDataSlice to handle Google sign-in
const mainDataSlice = createSlice({
  name: "mainData",
  initialState: mainDataAdapter.getInitialState(),
  reducers: {
    // ... other reducers ...
    
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith(heyatNaminApi.reducerPath),
        (state, action) => {
          // Handle loading state for all RTK Query actions
          state.isLoading = action.meta.requestStatus === "pending";
        }
      )
      .addCase(heyatNaminApi.endpoints.googleSignIn.pending, (state) => {
        // You can handle specific loading state for googleSignIn if needed
      })
      .addCase(
        heyatNaminApi.endpoints.googleSignIn.fulfilled,
        (state, action) => {
          state.user = action.payload;
        }
      )
      .addCase(
        heyatNaminApi.endpoints.googleSignIn.rejected,
        (state, action) => {
          // You can handle specific error state for googleSignIn if needed
        }
      );
  },
});

// Export the reducer and any actions or selectors needed
export const { reducer } = mainDataSlice;
export default reducer;
