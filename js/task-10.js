function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls").firstElementChild;

const boxesContainer = document.querySelector("#boxes");
console.log(createBtn);
console.log(destroyBtn);
console.log(input);

boxesContainer.classList.add('boxes');

function createBoxes(amount) {
  const boxes = []
  amount = Number(input.value);
  for (let i = 0; i < amount; i += 1){
    const oneBox = document.createElement("div");
    oneBox.style.backgroundColor = getRandomHexColor();
    oneBox.style.width = `calc(30px + 10px * ${i})`;
    oneBox.style.height = `calc(30px + 10px * ${i})`;
    boxes.push(oneBox);
  };
  boxesContainer.append(...boxes);
};


createBtn.addEventListener("click", createBoxes);


function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);


