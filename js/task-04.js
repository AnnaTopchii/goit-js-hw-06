let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIincrement = document.querySelector('button[data-action="increment"]');
let counter = document.querySelector('#value');

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});

buttonIincrement.addEventListener("click", () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
});