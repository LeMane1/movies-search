import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IMoviesSearchResponse } from '../models/types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json')
      headers.set('X-API-KEY', 'E4M5NTH-CCY4APJ-GEF0VNT-FH3ZJWX')
      return headers
    },
  }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query<IMoviesSearchResponse, string>({
      query: (query) => ({
        url: `/v1.4/movie/search`,
        method: 'GET',
        params: {
          page: 1,
          limit: 10,
          query
        }
      }),
      providesTags: ['Movies'],
    }),
  }),
})

export const { useLazyGetMoviesQuery } = api