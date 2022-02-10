const formatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})

export const formatPrice = (price) => {
  return formatter.format(price)
}
