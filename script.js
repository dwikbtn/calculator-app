const buttons = document.getElementsByClassName("calculator__button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    handleButton(event);
  });
}
const handleButton = (event) => {
  const value = event.target.getAttribute("data-value");
  addToDisplay(value);
};

const addToDisplay = (text) => {
  const display = document.getElementById("screen-text");
  const newdisplay = document.createTextNode(text);
  display.appendChild(newdisplay);
};
