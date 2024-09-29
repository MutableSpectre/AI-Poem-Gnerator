function displayPoem(response) {
    new Typewriter("#poem", {
            strings: response.data.answer,
            autoStart: true,
            cursor: "",
            delay: 1,
        });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#instructions");
    prompt = `User Instructions: Generate a poem using ${instructionInput.value}.`;
    context = "You are a romantic poet who writes 5 line poems using basic HTML format and seperates each like with <br />. Do not add ''''html' at the beginning or include a title. Sign the end of the poem with 'SheCodes AI' using the <strong> element.";
    apiKey = "40e28c77t4bb5368od54b9ccc0f6fad9";
    apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<span class="blink">⌛ Generating a poem about the topic ${instructionInput.value}.</span>`
    axios.get(apiURL).then(displayPoem); 
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);