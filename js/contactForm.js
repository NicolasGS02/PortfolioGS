document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgapryg", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        //Mostrar toast
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();

        //Limpiar formulario
        form.reset();
      } else {
        alert("Error al enviar el mensaje");
      }

    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }
  });

});