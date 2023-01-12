const textInput = document.querySelector("#validation-input");
const length = Number(textInput.dataset.length);

textInput.addEventListener("blur", (event) => { 
    textInput.classList.add('invalid');
    if (event.currentTarget.value.length === length) { textInput.classList.replace('invalid', 'valid')}   
});
