export const getDuration = (duration: number): string => {
  const hours = Math.round(duration / 60)
  const minutes = duration - hours * 60
  return `${hours ? hours + 'ч ' : ''}${minutes ? minutes + 'мин' : ''}`
}