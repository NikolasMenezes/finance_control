export async function renderAccountElement(container, { name, balance, id }) {
  const html = `
  <div class="flex flex-col gap-5 p-5 border border-zinc-50 rounded">
    <div class="flex flex-col gap-3 md:flex-row justify-between ">
      <p lass="font-medium text-md">${name}</p>
      <p class="font-medium text-md">Saldo <span class="account-balance-span ${
        balance >= 0 ? "text-emerald-500" : "text-red-500"
      }">${balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}</span></p>
    </div>
    <div class="flex self-end gap-3">
      <button data-modal-target="update-account-modal" data-modal-toggle="update-account-modal"  account_id="${id}" class="edit-account-btns rounded px-4 bg-amber-500 hover:bg-amber-600 duration-300 h-10 text-white">
        Editar
      </button>
      <button account_id="${id}" class="delete-account-btns rounded px-4 bg-red-600 hover:bg-red-700 duration-300 h-10 text-white">
        Excluir
      </button>
    </div>
  </div>
  `;

  container.innerHTML += html;
}
