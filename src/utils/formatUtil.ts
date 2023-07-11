export const commaFormat = (x: string | number, decimalPoint = 10) => {
  const parts = x.toString().split('.')
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  if (parts.length > 1) {
    const decimalPart = parts[1].substring(0, decimalPoint)
    return `${integerPart}.${decimalPart}`
  }

  return integerPart
}
