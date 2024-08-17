export type Breakpoints = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'none'

export interface IContainerParameters {
  breakpoint: Breakpoints;
  width: string;
}

export interface IMoviesSearchResponse {
  docs: IPreviewMovie[],
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovie {
  id: number
  externalId: ExternalId
  name: string
  alternativeName: string
  enName: any
  names: Name[]
  type: string
  typeNumber: number
  year: number
  description: string
  shortDescription: string
  slogan: string
  status: any
  rating: Rating
  votes: Votes
  movieLength: number
  totalSeriesLength: any
  seriesLength: any
  ratingMpaa: string
  ageRating: number
  poster: Poster
  backdrop: Backdrop
  genres: Genre[]
  countries: Country[]
  persons: Person[]
  budget: Budget
  premiere: Premiere
  similarMovies: SimilarMovie[] | null
  sequelsAndPrequels: SimilarMovie[] | null,
  watchability: Watchability
  top10: any
  top250: number
  isSeries: boolean
  audience: Audience[]
  ticketsOnSale: boolean
  lists: string[]
  networks: any
  createdAt: string
  updatedAt: string
  logo: Logo
}

export interface SimilarMovie {
  id: number,
  name: string,
  enName: string,
  alternativeName: string,
  type: string,
  poster: Poster,
  rating: Rating,
  year: number
}

export interface Premiere {
  country: any
  digital: any
  cinema: any
}

export interface Watchability {
  items: Item[]
}

export interface Item {
  name: string
  logo: Logo
  url: string
}

export interface Logo {
  url: string
}

export interface Audience {
  count: number
  country: string
}

export interface Person {
  id: number
  photo: string
  name?: string
  enName?: string
  description?: string
  profession: string
  enProfession: string
}

export interface Budget {
  currency: string
  value: number
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