export function currencyFormatter(number: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(number);
}
