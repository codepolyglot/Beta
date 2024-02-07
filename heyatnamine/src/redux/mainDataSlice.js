// mainDataSlice.js

import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import heyatNamineApi from "../app/heyatNaminApi";

const mainDataAdapter = createEntityAdapter({
  selectId: (mainData) => mainData.slug,

  sortComparer: (a, b) => {
    return a.title.localeCompare(b.title);
  },
});

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState: mainDataAdapter.getInitialState(),
  reducers: {
    // Add a reducer to handle the result of the `getMainData` query
    mainDataReceived: mainDataAdapter.upsertMany,

    // Add a reducer to handle the result of the `getMainDataById` query

    mainDataByIdReceived: mainDataAdapter.upsertOne,

    // Add a reducer to handle the result of the `getMainDataBySlug` query

    mainDataBySlugReceived: mainDataAdapter.upsertOne,
  },
});

export default mainApi.reducer;
export const { mainDataByIdReceived, mainDataBySlugReceived } =
  mainDataSlice.actions;
export const { selectAll: selectAllMainData } = mainDataAdapter.getSelectors(
  (state) => state.mainData
);
export const selectMainDataByTitle = createSelector(
  selectAllMainData,
  (state, title) => state.find((mainData) => mainData.title === title)
);
export const selectMainDataByCategory = createSelector(
  selectAllMainData,
  (state, category) =>
    state.filter((mainData) => mainData.category === category)
);
export const selectMainDataByTag = createSelector(
  selectAllMainData,
  (state, tag) => state.filter((mainData) => mainData.tags.includes(tag))
);
export const selectMainDataByAuthor = createSelector(
  selectAllMainData,
  (state, author) => state.filter((mainData) => mainData.author === author)
);

export const mainApi = heyatNamineApi.injectEndpoints({
  endpoints: (builder) => ({
    getMainData: builder.query({
      query: () => "main/",
      transformResponse: (response) => response.results,
    }),
    getMainDataById: builder.query({
      query: (id) => `main/${id}/`,
    }),
    getMainDataBySlug: builder.query({
      query: (slug) => `main/${slug}/`,
    }),
    getMainDataByTitle: builder.query({
      query: (title) => `main/title/${title}/`,
    }),
    getMainDataByCategory: builder.query({
      query: (category) => `main/category/${category}/`,
    }),
    getMainDataByTag: builder.query({
      query: (tag) => `main/tag/${tag}/`,
    }),
    getMainDataByAuthor: builder.query({
      query: (author) => `main/author/${author}/`,
    }),
  }),
});
