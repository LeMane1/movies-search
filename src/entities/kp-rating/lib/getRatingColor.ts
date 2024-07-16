export const getRatingColor = (ratingValue: number | null | undefined): string => {
  if (ratingValue) {
    if (ratingValue >= 8) {
      return '#2acf4b'
    } else if (ratingValue < 8 && ratingValue >= 5) {
      return '#bebebe'
    } else if (ratingValue < 5) {
      return '#dc2f2f'
    }
  }
  return '#bebebe'
}