export interface IMoviesSearchResponse {
  docs: IPreviewMovie[],
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IPreviewMovie {
  id: number
  name: string
  alternativeName: string
  enName: string
  type: string
  year: number
  description: string
  shortDescription: string
  movieLength: number
  isSeries: boolean
  ticketsOnSale: boolean
  totalSeriesLength: any
  seriesLength: any
  ratingMpaa: string | null
  ageRating: number | null
  top10: any
  top250: number | null
  typeNumber: number
  status: any
  names: Name[] | null
  externalId: ExternalId | null
  logo: any
  poster: Poster
  backdrop: Backdrop
  rating: Rating
  votes: Votes
  genres: Genre[]
  countries: Country[]
  releaseYears: any[]
}

export interface Name {
  name: string | null
  language?: string | null
  type?: string | null
}

export interface ExternalId {
  kpHD: string | null
}

export interface Poster {
  url: string | null
  previewUrl: string | null
}

export interface Backdrop {
  url: string | null
  previewUrl: string | null
}

export interface Rating {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: any
}

export interface Votes {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Genre {
  name: string
}

export interface Country {
  name: string
}