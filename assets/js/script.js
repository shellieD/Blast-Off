//Wait for the DOM to finish loading before running the gaem
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "levelOne") {
                alert('You clicked Level One!');
            } else {
                if (this.getAttribute("data-type") === "levelTwo") {
                    alert('You clicked Level Two!');
                } else {
                    if (this.getAttribute("data-type") === "levelThree") {
                    alert('You clicked Level Three!');
                    }   
                }
            }
        })
    }
})

function selectLevel() {

}

function runGame() {

}

function checkAnswer() {

}

function checkWord() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayLevelOne() {

}

function displayLevelTwo() {

}

function displayLevelThree() {

}


