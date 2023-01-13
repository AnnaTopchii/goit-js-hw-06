const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

changeFontSize();

inputEl.addEventListener("input", changeFontSize);

function changeFontSize() {
    textEl.style.fontSize = inputEl.value + 'px'}


