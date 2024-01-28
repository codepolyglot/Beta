// In ./index.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { heyatNamineApi } from "./heyatNaminApi";
import { reducer as mainDataReducer } from "./../redux/mainDataSlice"; // Import the reducer
const store = configureStore({
  reducer: {
    main: mainDataReducer,
    heyatNamineApi: heyatNamineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heyatNamineApi.middleware),
});

export default store;
