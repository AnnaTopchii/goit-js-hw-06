function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls").firstElementChild;
const amount = Number(input.value);
const boxesContainer = document.querySelector("#boxes");
console.log(createBtn);
console.log(destroyBtn);
console.log(input);



function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    boxesContainer.insertAdjacentHTML("beforeend", "<div> Hi </div>" )
  }
};

//const oneBox = boxesContainer.children;
//oneBox.style.backgroundColor = getRandomHexColor();
//oneBox.style.width = "30px";
//oneBox.style.height = "30px";

createBtn.addEventListener("click", createBoxes);


function destroyBoxes() {
  boxesContainer.insertAdjacentHTML("beforeend", "")
}

destroyBtn.addEventListener("click", destroyBoxes);


