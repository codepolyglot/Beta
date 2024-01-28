import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const heyatNamineApi = createApi({
  reducerPath: 'heyatNamineApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://heyatnamineapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // Define your endpoints here
    // For example:
    getPosts: builder.query({
      query: () => 'posts', // Replace with your actual endpoint path
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = heyatNamineApi;
export const { reducerPath } = heyatNamineApi;
