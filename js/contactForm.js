document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#contact form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Mostrar toast
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    // Limpiar formulario
    form.reset();
  });

});