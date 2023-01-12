function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const textOfColor = document.querySelector(".color");

const handleClick = (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textOfColor.innerHTML = getRandomHexColor();
};

buttonEl.addEventListener("click", handleClick);