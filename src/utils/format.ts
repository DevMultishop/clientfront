export const { format: formatBRL } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatUSD } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const { format: formatPrecision } = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 5,
});

export const { format: formatPercent } = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
});
