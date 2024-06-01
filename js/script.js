// script page
let optionButton = document.querySelectorAll('.optionButtons');
let advOptionButtons = document.querySelectorAll('.advOptionButtons');

console.log(advOptionButtons);
let fontName = document.getElementById('fontName');
let fontSize = document.getElementById('fontSize');
// console.log(fontName);

let textInput = document.getElementById('text-input');

let createLink = document.getElementById('createLink');

let alignButtons = document.querySelectorAll('.align');

let spacingButtons = document.querySelectorAll('.spacing');

let listButtons = document.querySelectorAll('.listButtons');

let formatButtons = document.querySelectorAll(".format");

let scriptButtons = document.querySelectorAll(".script");



let headingSelect = document.getElementById("headingSelect")

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

// console.log(fontList);

const initializer = () => {

    highLighter(alignButtons, true);
    highLighter(spacingButtons, true);
    highLighter(formatButtons, false);
    highLighter(scriptButtons, true);

    // font list
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);

        // console.log(option);

    });

    // font Size
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSize.appendChild(option);

        // console.log(option);
    }

    // default size 3
    fontSize.value = 3;
};



const modifyText = (command, defaultUi, value) => {

    // execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
    // console.log("click");
}

optionButton.forEach(button => {
    // console.log(button);
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});
// advance option for button like color, fonts etc
advOptionButtons.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    })
});

// script
scriptButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false,null);
    })
});
// aline
alignButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false,null);
    })
});

// spacing
spacingButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null);
    })

});
// list
listButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null);
    })

});




// for creating link
createLink.addEventListener("click",()=>{

    let userLink = prompt("Enter url");
    if(/http/i.test(userLink)){
        modifyText(createLink.id,false,userLink);
    }
    else{
        userLink = "http://" + userLink;
        modifyText(createLink.id,false,userLink)
    }

});



// heading select
headingSelect.addEventListener("change",()=>{
    let heading = headingSelect.value;
    modifyText('formatBlock',false,heading);
})

const highLighter = (className, needToRemove) => {

    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needToRemove) {
                let alreadyActive = false;

                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                highLighterRemover(className);

                if (!alreadyActive) {
                    button.classList.add("active");
                }
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

window.onload = initializer();