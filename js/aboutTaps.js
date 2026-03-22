document.addEventListener("DOMContentLoaded", () => {

  const content = {
    personal: {
      title: "Lo principal sobre <br><span class='text-warning'>Mí</span>",
      text1: "Me llamo Nicolás González Sánchez, ingeniero informático por graduarse en la universidad política superior de la Upo. Llevo años programando y aprendiendo sobre tecnología, con un enfoque especial en el desarrollo web y la inteligencia artificial.",
      text2: "",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEJXszH7vC8iQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695743621659?e=1775692800&v=beta&t=1WIOj_8Z7-8shv36ZX51rKHKiEeiQ5V5NBf10OXrluk",
      caption: "✦ Me",
      sub: ""
    },
    studies: {
      title: "Formación <br><span class='text-warning'>Académica</span>",
      text1: "Actualmente estoy por finalizar mi grado en ingeniería informatica, habiendo finalizado esta tras 4 años. Además, también poseo titulación en Bachillerato de ciecias tecnológicas, y titulación de B2 en inglés acreditaca por cambridge.",
      text2: "Especial interés en IA, desarrollo web y sistemas.",
      img: "https://i.ibb.co/1tkGD0s0/Picsart-26-03-22-19-39-10-150.png",
      caption: "✦ Mi conocimiento actual",
      sub: ""
    },
    experience: {
      title: "Experiencia <br><span class='text-warning'>Profesional</span>",
      text1: "Debido a mi enfoque en los estudios, todavia no he realizado prácticas profesionales formales. Sin embargo, he trabajado en varios proyectos personales y proyectos universarios los cuales me han dado una gran capacidad de aprendizaje y adaptación a nuevas tecnologías.",
      text2: "Uso de tecnologías modernas como Bootstrap, JS y Python.",
      img: "https://static.vecteezy.com/system/resources/previews/016/855/420/non_2x/job-market-line-two-color-icon-vector.jpg",
      caption: "✦ Proximas metas",
      sub: "Futuras aspiraciones"
    }
  };

  const buttons = document.querySelectorAll("#about button");
  const title = document.querySelector("#about h2");
  const paragraphs = document.querySelectorAll("#about p");
  const image = document.querySelector("#about img");
  const caption = document.querySelector(".floating-info");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

      // Reset estilos botones
      buttons.forEach(b => {
        b.classList.remove("btn-warning");
        b.classList.add("btn-outline-light");
      });

      btn.classList.add("btn-warning");
      btn.classList.remove("btn-outline-light");

      let key = index === 0 ? "personal" : index === 1 ? "studies" : "experience";

      // Cambiar contenido
      title.innerHTML = content[key].title;
      paragraphs[0].textContent = content[key].text1;
      paragraphs[1].textContent = content[key].text2;
      image.src = content[key].img;

      caption.innerHTML = `
        ${content[key].caption} <br>
        <small>${content[key].sub}</small>
      `;
    });
  });

});