export function showToast(
  message = "Deu certo! Registro feito com sucesso!",
  color = "success"
) {
  const toastColor = {
    success: "green",
    error: "red",
  };

  Toastify({
    text: "This is a toast",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: toastColor[color],
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
