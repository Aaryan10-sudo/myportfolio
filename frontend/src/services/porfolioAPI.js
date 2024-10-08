// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const portfolioApi = createApi({
  reducerPath: "portfolio",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9999" }),
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (data) => {
        return {
          url: "/portfolio",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useCreateMessageMutation } = portfolioApi;
