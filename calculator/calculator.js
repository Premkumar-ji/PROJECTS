let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('.input');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            inputField.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            inputField.value = "";
        } else {
            string += e.target.innerHTML;
            inputField.value = string;
        }
    });
});

alert("Hello! This is a glass calculator.");
console.log("Execution started.");
