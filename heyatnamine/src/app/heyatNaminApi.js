import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// googlesign in
export const heyatNamineApi = createApi({
  reducerPath: "heyatNamineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }), // Correct base URL
  endpoints: (builder) => ({
    getMainData: builder.query({
      query: () => "main/", // Correct endpoint path
    }),
    getMainDataById: builder.query({
      query: (id) => `main/${id}/`, // Correct endpoint path
    }),
    getMainDataBySlug: builder.query({
      query: (slug) => `main/${slug}/`, // Correct endpoint path
    }),
    getMainDataByTitle: builder.query({
      query: (title) => `main/title/${title}/`, // Correct endpoint path
    }),
    getMainDataByCategory: builder.query({
      query: (category) => `main/category/${category}/`, // Correct endpoint path
    }),
    getMainDataByTag: builder.query({
      query: (tag) => `main/tag/${tag}/`, // Correct endpoint path
    }),
    getMainDataByAuthor: builder.query({
      query: (author) => `main/author/${author}/`, // Correct endpoint path
    }),
  }),
});

export const { useGetMainDataQuery } = heyatNamineApi;

export default heyatNamineApi;
