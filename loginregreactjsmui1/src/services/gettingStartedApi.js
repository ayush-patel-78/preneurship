import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const getStartApi = createApi({
  reducerPath: 'getStartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getStartUser: builder.mutation({
      query: (user) => {
        return {
          url: 'verification/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getStartedUserData: builder.query({
      query: () => {
        return {
          url: 'verification/',
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    // changeUserPassword: builder.mutation({
    //   query: ({ actualData, access_token }) => {
    //     return {
    //       url: 'changepassword/',
    //       method: 'POST',
    //       body: actualData,
    //       headers: {
    //         'authorization': `Bearer ${access_token}`,
    //       }
    //     }
    //   }
    // }),
    // sendPasswordResetEmail: builder.mutation({
    //   query: (user) => {
    //     return {
    //       url: 'send-reset-password-email/',
    //       method: 'POST',
    //       body: user,
    //       headers: {
    //         'Content-type': 'application/json',
    //       }
    //     }
    //   }
    // }),
    // resetPassword: builder.mutation({
    //   query: ({ actualData, id, token }) => {
    //     return {
    //       url: `/reset-password/${id}/${token}/`,
    //       method: 'POST',
    //       body: actualData,
    //       headers: {
    //         'Content-type': 'application/json',
    //       }
    //     }
    //   }
    // }),
  }),
})

// export const { useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation } = userAuthApi
 export const { useGetStartUserMutation,useGetStartedUserDataQuery  } = getStartApi;