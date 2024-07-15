export const getStrWithUCFirstChar = (value: string): string => {
  if (value) {
    return value[0].toUpperCase() + value.slice(1)
  }
  return ''
}