export function numToBrl(num) {
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format((num / 100).toFixed(2));
}
