const txtOutput = document.querySelector(".output");
const txtPrevious = document.querySelector(".previous");

let inputText = '';
let inputState = true;


function btnAddClick(event) {
    if (!inputState) {
        inputState = true;
        inputText = "";
    }
    inputText = inputText + event.target.innerHTML;
    txtOutput.innerHTML = inputText;
}


function btnEqualsClick() {
    inputState = false;
    let output = eval(inputText);
    txtPrevious.innerHTML = inputText+"=";
    txtOutput.innerHTML = output;
}


function btnClearClick() {
    inputText = "";
    txtOutput.innerHTML = "";
    txtPrevious.innerHTML = "";
}


function btnBackspaceClick() {
    if (inputState && inputText.length > 0) {
        inputText = inputText.slice(0, -1);
        txtOutput.innerHTML = inputText;
    }
}


const outputAddButtons = document.querySelectorAll(".btnAdd");
for (btn of outputAddButtons) {
    btn.addEventListener("click", btnAddClick);
}


document.querySelector(".clear").addEventListener("click", btnClearClick);
document.querySelector(".btnBackspace").addEventListener("click", btnBackspaceClick);
document.querySelector(".btnEquals").addEventListener("click", btnEqualsClick);

