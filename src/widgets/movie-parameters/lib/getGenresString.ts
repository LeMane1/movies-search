import { Genre } from "src/shared/models";

export const getGenresString = (genres: Genre[] | null | undefined): string => {
  if (genres) {
    let result = []
    for (let genre of genres) {
      result.push(genre.name)
    }

    return result.join(', ')
  } else {
    return ''
  }
}