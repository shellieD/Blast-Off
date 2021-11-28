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
                    <button class="letter" data-key="a">A</button>
                    <button class="letter" data-key="b">B</button>
                    <button class="letter" data-key="c">C</button>
                    <button class="letter" data-key="d">D</button>
                    <button class="letter" data-key="e">E</button>
                    <button class="letter" data-key="f">F</button>
                    <button class="letter" data-key="g">G</button>
                    <button class="letter" data-key="h">H</button>
                    <button class="letter" data-key="i">I</button>
                    <button class="letter" data-key="j">J</button>
                    <button class="letter" data-key="k">K</button>
                    <button class="letter" data-key="l">L</button>
                    <button class="letter" data-key="m">M</button>
                    <button class="letter" data-key="n">N</button>
                    <button class="letter" data-key="o">O</button>
                    <button class="letter" data-key="p">P</button>
                    <button class="letter" data-key="q">Q</button>
                    <button class="letter" data-key="r">R</button>
                    <button class="letter" data-key="s">S</button>
                    <button class="letter" data-key="t">T</button>
                    <button class="letter" data-key="u">U</button>
                    <button class="letter" data-key="v">V</button>
                    <button class="letter" data-key="w">W</button>
                    <button class="letter" data-key="x">X</button>
                    <button class="letter" data-key="y">Y</button>
                    <button class="letter" data-key="z">Z</button>
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
        '_'.repeat(currentWord.length);
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