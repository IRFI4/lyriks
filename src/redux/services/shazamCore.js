import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '3629dd56a8mshd7e09a27953d272p13ca86jsn445bc5cff286');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
        // https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world?limit=10
        // https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=POP&limit=10
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;