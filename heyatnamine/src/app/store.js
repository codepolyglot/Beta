import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { heyatNamineApi } from "./heyatNaminApi";
import mainDataReducer from "./../redux/mainDataSlice";

const store = configureStore({
  reducer: {
    main: mainDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heyatNamineApi.middleware),
});

export default store;
