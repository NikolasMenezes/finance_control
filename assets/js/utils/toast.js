export function showToast(
  message = "Deu certo! Registro feito com sucesso!",
  color = "success"
) {
  const toastColor = {
    success: "#10e01a",
    error: "#ed311c",
    info: "#1094e0",
  };

  Toastify({
    text: message,
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: toastColor[color],
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
