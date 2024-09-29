function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "La tombe dit a la rose",
        autoStart: true,
        cursor: "",
        delay: 1,
      });
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);