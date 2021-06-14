const display = document.getElementById("screen-text");

const buttons = document.getElementsByClassName("calculator__button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    handleButton(event);
  });
}
const handleButton = (event) => {
  const value = event.target.getAttribute("data-value");
  switch (value) {
    case "reset":
      resetDisplay();
      break;
    case "delete":
      deleteDisplay();
      break;
    case "=":
      calculate();
      break;
    default:
      addToDisplay(value);
  }
};

const deleteDisplay = () => {
  if (display.lastChild != null) {
    display.removeChild(display.lastChild);
  }
};

const resetDisplay = () => {
  display.innerHTML = "";
};

const calculate = (value) => {
  console.log("calculate");
};
const addToDisplay = (text) => {
  const newdisplay = document.createTextNode(text);
  display.appendChild(newdisplay);
};
