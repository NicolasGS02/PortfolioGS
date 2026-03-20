// Inicializar popovers
const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');

const popovers = [];

// Crear todos los popovers
popoverElements.forEach(el => {
  const pop = new bootstrap.Popover(el);
  popovers.push(pop);
});

// Cerrar otros al abrir uno nuevo
popoverElements.forEach(el => {
  el.addEventListener('click', function () {

    popovers.forEach(pop => {
      const popoverElement = pop._element;

      if (popoverElement !== el) {
        pop.hide();
      }
    });

  });
});