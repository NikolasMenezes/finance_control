export function renderAccountElement(container, { name, balance, id }) {
  const html = `
  <div class="flex flex-col gap-5 p-3 border border-zinc-100 rounded">
    <div class="flex justify-between ">
      <p lass="font-medium text-md">${name}</p>
      <p class="font-medium text-md">Saldo <span class="account-balance-span ${
        balance >= 0 ? "text-emerald-500" : "text-red-500"
      }">${balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}</span></p>
    </div>
    <div class="flex self-end gap-3">
      <button account-id="${id}" class="rounded px-4 bg-yellow-600 hover:bg-yellow-700 duration-300 h-10 text-white">
        Editar
      </button>
      <button account-id="${id}" class="rounded px-4 bg-red-600 hover:bg-red-700 duration-300 h-10 text-white">
        Excluir
      </button>
    </div>
  </div>
  `;

  container.innerHTML += html;
}
