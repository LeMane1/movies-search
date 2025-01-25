import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IMoviesSearchResponse, IMovie } from '../models/types'

const kinopoiskApiKey = 'E4M5NTH-CCY4APJ-GEF0VNT-FH3ZJWX'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json')
      headers.set('X-API-KEY', kinopoiskApiKey)
      return headers
    },
  }),
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
    }),
    getMovieByTitleId: builder.query<IMovie, number>({
      query: (query) => ({
        url: `/v1.4/movie/${query}`,
        method: 'GET'
      })
    })
  }),
})

export const { useLazyGetMoviesQuery, useLazyGetMovieByTitleIdQuery } = api