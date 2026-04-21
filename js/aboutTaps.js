document.addEventListener("DOMContentLoaded", () => {

  const content = {
    personal: {
      title: "Lo principal sobre <br><span class='text-warning'>Mí</span>",
      text1: "Me llamo Nicolás González Sánchez, ingeniero informático por graduarse<br>en la universidad política superior de la Upo. Llevo años programando y<br>aprendiendo sobre tecnología, con un enfoque especial en<br>el desarrollo web y la inteligencia artificial.",
      text2: "",
      img: "https://i.ibb.co/C3sxkFwS/Picsart-26-04-20-22-47-02-963.jpg",
      caption: "✦ Me",
      sub: ""
    },
    studies: {
      title: "Formación <br><span class='text-warning'>Académica</span>",
      text1: `Actualmente estoy por finalizar mi grado en ingeniería informatica,<br>
              habiendo finalizado esta tras 4 años de estudio. Además, también poseo<br>
              titulación en Bachillerato de ciecias tecnológicas,<br>
              y certificado de idioma B1 en inglés acreditaca por cambridge.`,
      text2: "Conocimiento en Python, C, JavaScript., HTML, CSS, Angular y más.",
      img: "https://i.ibb.co/1tkGD0s0/Picsart-26-03-22-19-39-10-150.png",
      caption: "✦ Conocimiento actual",
      sub: ""
    },
    experience: {
      title: "Experiencia <br><span class='text-warning'>Profesional</span>",
      text1: `Debido a mi enfoque en los estudios, todavia no he realizado prácticas <br>
              profesionales formales. Sin embargo, he trabajado en varios proyectos personales<br>
              y proyectos universarios los cuales me han dado una gran capacidad de<br>
              aprendizaje y adaptación a nuevas tecnologías.`,
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

      // Cambiar contenido usando innerHTML para permitir etiquetas <br>
      title.innerHTML = content[key].title;
      paragraphs[0].innerHTML = content[key].text1;
      paragraphs[1].innerHTML = content[key].text2;
      image.src = content[key].img;

      caption.innerHTML = `
        ${content[key].caption} <br>
        <small>${content[key].sub}</small>
      `;
    });
  });

});