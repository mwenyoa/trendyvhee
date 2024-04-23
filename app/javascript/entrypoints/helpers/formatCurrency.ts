const FormattedCurrency = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number) =>
  FormattedCurrency.format(number);
