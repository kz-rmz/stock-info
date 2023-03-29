import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.iex.cloud/v1/data/CORE/" }),
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: (token) => `/COMPANY?last=10&token=${token}`,
    }),
  }),
});

export const { useGetCompanyQuery } = apiSlice;
