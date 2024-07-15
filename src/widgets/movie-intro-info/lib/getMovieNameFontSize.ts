import type { Breakpoints } from "src/shared/models"

export const getMovieNameFontSize = (breakpoint: Breakpoints): string => {
  switch (breakpoint) {
    case 'xxl':
      return '60px'
    case 'xl':
      return '54px'
    case 'lg':
      return '50px'
    case 'md':
      return '42px'
    case 'sm':
      return '30px'
    case 'xs':
      return '24px'
    default:
      return '24px'
  }
}