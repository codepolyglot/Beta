import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { heyatNamineApi } from "../app/heyatNaminApi";

// Define an async thunk to fetch data from the API
export const fetchMainData = createAsyncThunk(
  "mainData/fetchMainData",
  async () => {
    const response = await heyatNamineApi.getPosts();
    return response.data;
  }
);

const mainDataAdapter = createEntityAdapter({
  selectId: (data) => data.id,
  sortComparer: (a, b) => a.timestamp - b.timestamp,
});

const mainDataSlice = createSlice({
  name: "mainData",
  initialState: mainDataAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {
    // Additional synchronous actions can be defined here if needed
    // For example:
    // resetMainData: state => {
    //   mainDataAdapter.removeAll(state);
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMainData.fulfilled, (state, action) => {
        state.status = "succeeded";
        mainDataAdapter.setAll(state, action.payload);
      })
      .addCase(fetchMainData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the reducer and any actions or selectors you might need
export const { selectAll: selectAllMainData, selectById: selectMainDataById } =
  mainDataAdapter.getSelectors((state) => state.mainData);
export const { reducer, actions } = mainDataSlice;

export default mainDataSlice.reducer

// Example usage of the fetchMainData async thunk in a component:
// dispatch(fetchMainData());
