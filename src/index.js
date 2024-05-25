function generateForm(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Here the poem will be generated... ",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generateElement = document.querySelector("#poem-generator");
generateElement.addEventListener("submit", generateForm);
