/* eslint-disable no-param-reassign */
export default function formatCurrency(value: number): string {
  let formatValue = '';

  if (value > 0) {
    formatValue = `R$ ${value
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  } else if (value < 0) {
    value *= -1;

    formatValue = `- R$ ${value
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }

  return formatValue;
}
