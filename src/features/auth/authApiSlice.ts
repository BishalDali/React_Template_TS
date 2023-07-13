import { apiSlice } from "../app/apiSlice";  


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "auth/logout",
                method: "POST",
            }),
        }),
        getAuthUser: builder.query({
            query: () => `auth/single`,
        }),
        refreshToken: builder.mutation<{message: string}, {refreshToken: string}>({
            query: ({refreshToken }) => ({
                url: "auth/refresh-token",
                method: "POST",
                body: {refreshToken},

            }), 
        }),
        
    })
})

export const { useLoginMutation, useLogoutMutation, useGetAuthUserQuery, useRefreshTokenMutation } = authApiSlice;