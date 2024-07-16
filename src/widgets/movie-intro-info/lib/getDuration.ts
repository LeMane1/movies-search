export const getDuration = (duration: number): string => {
  const hours = duration / 60
  const hoursInt = Math.floor(hours)
  const minutes = Math.round((hours - hoursInt) * 60)
  return `${hoursInt ? hoursInt + 'ч ' : ''}${minutes ? minutes + 'мин' : ''}`
}