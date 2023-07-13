import { apiSlice } from "../app/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => `users/single`,
        }),
    }),

})

export const { useGetUserQuery } = userApiSlice;