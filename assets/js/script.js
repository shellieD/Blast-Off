//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    openGameLevelArea();
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(event){
            if (this.getAttribute("data-type") === "levelOne") {
            runLevel(levelOneWords);
            } else {
                if (this.getAttribute("data-type") === "levelTwo") {
                runLevel(levelTwoWords);
                } else {
                    if (this.getAttribute("data-type") === "levelThree") {
                    runLevel(levelThreeWords);
                    }   
                }
            }
        })
    }
})

//const container = document.getElementById('container');
//const gameLevelArea = document.getElementById('game-level-area'); // div containing text and difficulty-buttons div
//const difficultyButtons = document.getElementsByClassName('difficulty-buttons'); //div containing level buttons
//const buttonLevel = document.getElementsByClassName('button-level'); // all buttons for levels 
//const level1 = docuement.getElementsByClassName('level1'); // button for level 1 game
//const level2 = document.getElementsByClassName('level2'); // button for level 2 game
//const level3 = document.getElementsByClassName('level3'); // button for level 3 game
//const gameArea = document.getElementById('game-area'); // div containing all game features - rules, guessing-area div, reset button, scores and lives left
//const guessingArea = document.getElementById('guessing-area'); // div containing current random word and alphabet buttons

//const alphabetDiv = document.getElementById('alphabet'); // div containing alphabet buttons
//const letterButton = document.getElementsByClassName('letter'); // letter buttons
//const resetButtonDiv = document.getElementById('reset-button'); // reset button div
//const reset = document.getElementsByClassName('reset'); //reset button
//var correctScore = document.getElementsByClassName('blast-offs'); // correct score div
//var incorrectScore = document.getElementByClassName('grounded'); //incorrect score div


var wordArea = document.getElementById('word-area');

/**
 * changes inner HTML to display game screen when called.
 */

let lives = 10;
let randomWord = '';

function openGameLevelArea() {
    document.getElementById('container').innerHTML = `
    <div id="game-level-area">
            <h2>Welcome Astronauts!</h2>
            <p>The aim of the game is to guess the space-related word, letter-by-letter, before your lives are up to blast-off to space.  Use too many of your lives and you will remain grounded *sad-astronaut-face*</p>
            <div class="difficulty-buttons">
                <h3>Choose Level</h3>
                <button class="button-level" class="level1" data-type="levelOne">Level 1</button>
                <button class="button-level" class="level2" data-type="levelTwo">Level 2</button>
                <button class="button-level" class="level3" data-type="levelThree">Level 3</button>
            </div>
        </div>`
}

function openGameScreen() {
    document.getElementById('container').innerHTML =`
    <div id="game-area">
            <h3>Blast off to space by guessing the word correctly!<br>Good luck with your mission spacewalker.</h4>
            <div id="guessing-area">
                <div id="word-area">
                </div>
                <div id="alphabet">
                    <button class="letter">A</button>
                    <button class="letter">B</button>
                    <button class="letter">C</button>
                    <button class="letter">D</button>
                    <button class="letter">E</button>
                    <button class="letter">F</button>
                    <button class="letter">G</button>
                    <button class="letter">H</button>
                    <button class="letter">I</button>
                    <button class="letter">J</button>
                    <button class="letter">K</button>
                    <button class="letter">L</button>
                    <button class="letter">M</button>
                    <button class="letter">N</button>
                    <button class="letter">O</button>
                    <button class="letter">P</button>
                    <button class="letter">Q</button>
                    <button class="letter">R</button>
                    <button class="letter">S</button>
                    <button class="letter">T</button>
                    <button class="letter">U</button>
                    <button class="letter">V</button>
                    <button class="letter">W</button>
                    <button class="letter">X</button>
                    <button class="letter">Y</button>
                    <button class="letter">Z</button>
                </div>
                <div id="reset-button">
                    <button class="reset">Reset</button>
                </div>
                <div class="scores-area">
                    <p class="blast-offs">No of Blast-offs: 0</p>
                    <p class="grounded"> No of groundings: 0</p>
                </div>
                <img src="assets/images/rocket.png" alt="Red rocket" id="rocket">
            </div>
        </div>`
}
/** 
 * Selects random word from levelOneWords array
 */
function runLevel(words) {
    randomWord = words[Math.floor(Math.random()*words.length)]
    openGameScreen();
    setRandomWord();
    console.log(randomWord);
}

function setRandomWord() {
    currentWord = randomWord;
    for (let i = 0; i < currentWord.length; i++) {
        console.log(currentWord);
    }
    document.getElementById('word-area').innerHTML=`<p>${currentWord}</p>`;
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

function missionAccomplished() {
    document.getElementById('mission-accomplished').innerHTML =`
    <div id="mission-accomplished">
            <h2>MISSION ACCOMPLISHED </h2>
            <p>WELL DONE SPACE CADET</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level" class="level1" data-type="levelOne">Level 1</button>
                <button class="button-level" class="level2" data-type="levelTwo">Level 2</button>
                <button class="button-level" class="level3" data-type="levelThree">Level 3</button>
            </div>
            <div class="scores-area">
                <p id="blast-offs">No of Blast-offs: 0</p>
                <p id="grounded"> No of groundings: 0</p>
            </div>
        </div>`
}

function missionAborted() {
    document.getElementById('mission-aborted').innerHTML =`
    <div id="mission-aborted">
            <h2>MISSION ABORTED</h2>
            <p>RETURN TO SPACE SCHOOL</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level" class="level1" data-type="levelOne">Level 1</button>
                <button class="button-level" class="level2" data-type="levelTwo">Level 2</button>
                <button class="button-level" class="level3" data-type="levelThree">Level 3</button>
            </div>
            <div class="scores-area">
                <p class="blast-offs">No of Blast-offs: 0</p>
                <p class="grounded"> No of groundings: 0</p>
            </div>
        </div>
    `
}