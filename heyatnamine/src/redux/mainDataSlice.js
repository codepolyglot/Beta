import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const mainDataAdapter = createEntityAdapter({
  selectId: (data) => data.id,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});

/**
 * Redux slice for managing main data.
 *
 * @typedef {Object} MainDataSlice
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {Function} reducers - The reducers for the slice.
 * @property {Function} extraReducers - The extra reducers for the slice.
 */
const mainDataSlice = createSlice({
  name: "mainData",
  initialState: mainDataAdapter.getInitialState(),
  reducers: {
    // Add your reducer functions here
    clearData: function (state) {
      mainDataAdapter.removeAll(state);
    },

    addData: mainDataAdapter.addOne,
    removeData: mainDataAdapter.removeOne,
    updateData: mainDataAdapter.updateOne,

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        heyatNamineApi.endpoints.googleSignIn.matchPending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(
        heyatNamineApi.endpoints.googleSignIn.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        heyatNamineApi.endpoints.googleSignIn.matchRejected,
        (state, action) => {
          state.error = action.error;
          state.isLoading = false;
        }
      );
  },
});

export const { reducer } = mainDataSlice;
export default reducer;
