const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

button.addEventListener("click", async (e) => {
    e.preventDefault();

    const text = textInput.value;
    const delay = Number(delayInput.value);

    output.textContent = "";

    await wait(delay);

    output.textContent = text;
});
