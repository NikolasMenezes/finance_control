import { formatCurrency } from "../utils/formatCurrency.js";

export function renderTransactions(
  container,
  { type, value, date, description }
) {
  const html = `
  <div class="rounded-md border border-zinc-600 p-5 w-full lg:w-2/6">
    <p class="mb-3">Tipo de transação: ${
      type == "income" ? "Receita" : "Despesa"
    }</p>
    <p class="mb-3">
      Valor:
      <span class="value font-medium ${
        type == "income" ? "text-emerald-500" : "text-red-500"
      }">${formatCurrency(String(value.toFixed(2)))}</span>
    </p>
    <p class="mb-3 font-medium">
      Descrição:
    <span class="description font-normal">${description}</span>
    </p>
    <p class="mb-3">
      Data: <span class="date font-medium">${new Date(date)
        .toLocaleString("pt-BR")
        .slice(0, 10)}</span>
    </p>
  </div>
  `;

  container.innerHTML += html;
}
