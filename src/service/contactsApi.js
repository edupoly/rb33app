// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/contacts' }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `/`,
    }),
    addContact: builder.mutation({
      query:(newcontact)=>{
        return {
          url: `/`,
          method: 'POST',
          body:newcontact,
        }
      }
    }),
    // deletePost: builder.mutation({
    //   query:(postid)=>{
    //     return {
    //       url: `/${postid}`,
    //       method: 'DELETE'
    //     }
    //   }
    // }),
    // updatePost: builder.mutation({
    //   query:(post)=>{
    //     return {
    //       url: `/${post.id}`,
    //       method: 'PUT',
    //       body:post
    //     }
    //   }
    // })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllContactsQuery,
  useAddContactMutation
 } = contactsApi