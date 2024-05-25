function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateForm(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-topics");
  let apiKey = "ef28bo275ed9fd6ce37aba445ad5t8b0";

  let context =
    "You are a romantic expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow user instructions.  At the end Sing the poem as <br/><br/><strong>by SheCodes AI</strong>. Write each line separately as <br/>.";
  let prompt = `Generate an English poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poe");
  console.log(`Prompt : ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let generateElement = document.querySelector("#poem-generator");
generateElement.addEventListener("submit", generateForm);
