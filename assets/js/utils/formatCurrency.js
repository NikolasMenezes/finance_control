export function formatCurrency(input) {
  const cleanValue = input.replace(/[^\d]/g, "");

  const numberValue = parseFloat(cleanValue) / 100;

  return numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
