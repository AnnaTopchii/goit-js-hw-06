const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

changeFontSize();

inputEl.addEventListener("change", changeFontSize);

function changeFontSize() {
    textEl.style.fontSize = inputEl.value + 'px'}


