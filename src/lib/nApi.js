// RTK Query API implemantation

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hotel } from 'lucide-react';
import { HotelData } from '../Data';


// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api/',
        prepareHeaders: async (headers) => {
            const clerk = window.Clerk; // Access the Clerk instance from the global window object
            if (clerk) {
                const token = await clerk.session ?.getToken(); // Get the session token from Clerk
                headers.set('Authorization', `Bearer ${token}`); // Set the Authorization header with the token
            }
        }
    }),
    endpoints : (builder) => ({
        getAllHotels : builder.query({
            query : () => 'HotelData',
        }),
        getHotelById : builder.query({
            query : (id) => `HotelData/${id}`,

        }),
        createHotels : builder.mutation({
            query : (newHotel) => ({
                url : 'HotelData',
                method : 'POST',
                body : newHotel
            }),
        }),
        addLocation : builder.mutation({
            query : (newLocation) => ({
                url : 'locations',
                method : 'POST',
                body : {
                    name : newLocation.name,
                },
            }),
        }),

        getAllLocations : builder.query({
            query : () => 'locations',
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllHotelsQuery, useAddLocationMutation, useGetAllLocationsQuery, useGetHotelByIdQuery, useCreateHotelsMutation } = api;

