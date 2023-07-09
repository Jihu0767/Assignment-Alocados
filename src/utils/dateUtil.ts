// YYYY-MM-DD ,AM HH:mm
export const getNowDate = () => {
  const now = new Date()

  // YYYY-MM-DD
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`

  // AM HH:mm
  const hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const timePeriod = hours < 12 ? 'AM' : 'PM'
  const formattedHours = hours % 12 === 0 ? '12' : String(hours % 12)
  const formattedTime = `${timePeriod} ${formattedHours}:${minutes}`

  return `${formattedDate}, ${formattedTime}`
}
