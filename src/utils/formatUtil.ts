export const commaFormat = (x: string | number) => {
  const parts = x.toString().split('.')
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart
}
