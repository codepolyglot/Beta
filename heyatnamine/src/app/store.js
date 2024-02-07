import { configureStore } from "@reduxjs/toolkit";
import { heyatNamineApi } from "./heyatNamineApi";
import { reducer as mainDataReducer } from "../redux/mainDataSlice"; // Corrected import path
import { setupListeners } from "@reduxjs/toolkit/query/react"; // Adjusted import
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    main: mainDataReducer,
    [heyatNamineApi.reducerPath]: heyatNamineApi.reducer, // Accessing the reducer path correctly
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heyatNamineApi.middleware),
});

export default setupListeners(store.dispatch);
