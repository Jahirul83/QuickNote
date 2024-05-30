// script page
let optionButton = document.querySelectorAll('.optionButtons');
let advOptionButton = document.querySelectorAll('.advOptionButtons');
let fontName = document.getElementById('fontName');
let fontSize = document.getElementById('fontSize');

let textInput = document.getElementById('text-input');

let createLink = document.getElementById('createLink');

let alignButtons = document.querySelectorAll('.align');

let spacingButtons = document.querySelectorAll('.spacing');

let formateButton = document.querySelectorAll(".formate");

let scriptButton = document.querySelectorAll(".script");

// fontLint
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgi",
    "Courser",
    "cursive New",
];


const initializer = () => {

    highLighter(alignButtons, true);
    highLighter(spacingButtons, true);
    highLighter(formateButton, true);
    highLighter(scriptButton, true);
}


const highLighter = (className, needToRemove) => {

    className.forEach(button => {
        button.addEventListener("click", () => {
            if (needToRemove) {
                let alreadyActive = false;
            }
            if (button.classList.contains("active")) {
                alreadyActive = true;
            }

            highLighterRemover(className);
            
            if (!alreadyActive) {
                button.classList.add("active");
            }
            else {
                button.classList.toggle("active");
            }
        });
    });

};

const highLighterRemover = (className) => {
    className.forEach(button => {
        button.classList.remove("active");
    });
}