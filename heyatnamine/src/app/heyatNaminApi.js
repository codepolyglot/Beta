// Import createApi and fetchBaseQuery from RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heyatNamineApi = createApi({
  reducerPath: "heyatNamineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://heyatnamineapi.co/api/v2/" }),
  endpoints: (builder) => ({
    // ... other endpoints ...
    // Step 1: Define a new mutation for Google sign-in
    googleSignIn: builder.mutation({
      query: (googleToken) => ({
        url: "auth/google",
        method: "POST",
        body: { token: googleToken },
      }),
    }),
  }),
});

// Step 2: Export the new mutation hook
export const { useGoogleSignInMutation } = heyatNamineApi;
