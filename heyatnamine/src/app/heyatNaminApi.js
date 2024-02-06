import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heyatNaminApi = createApi({
  reducerPath: "heyatNaminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Update the base URL as per your API endpoint
  endpoints: (builder) => ({
    googleSignIn: builder.mutation({
      query: (googleUser) => ({
        url: `/googleSignIn`,
        method: "POST",
        body: { googleUser },
      }),
    }),
  }),
});

export const { useGoogleSignInMutation } = heyatNaminApi;

// Step 2: Export the new mutation hook

