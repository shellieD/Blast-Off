//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    openGameLevelArea();
    addLevelButtonListeners();
})

var wordArea = document.getElementById('word-area');

/**
 * changes inner HTML to display game screen when called.
 */

var lives = 10;
var randomWord = '';
var currentWord;
var chosenLetters = [];

function addLevelButtonListeners() {
    let buttons = document.getElementsByClassName("button-level");
    for (let button of buttons) {
        button.addEventListener("click", function(event){
            if (this.getAttribute("data-type") === "levelOne") {
                runLevel(levelOneWords);
            } else if (this.getAttribute("data-type") === "levelTwo") {
                runLevel(levelTwoWords);
            } else if (this.getAttribute("data-type") === "levelThree") {
                runLevel(levelThreeWords);
            }   
        })
    }
}

function openGameLevelArea() {
    document.getElementById('container').innerHTML = `
    <div id="game-level-area">
            <h2>Welcome Astronauts!</h2>
            <p>The aim of the game is to guess the space-related word, letter-by-letter, before your lives are up to blast-off to space.  Use too many of your lives and your spaceship will remain grounded *sad-astronaut-face*</p>
            <div class="difficulty-buttons">
                <h3>Choose Level</h3>
                <button class="button-level level1" data-type="levelOne">Level 1</button>
                <button class="button-level level2" data-type="levelTwo">Level 2</button>
                <button class="button-level level3" data-type="levelThree">Level 3</button>
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
                <div>
                <p>Remaining Lives: ${lives}</p>
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
 * generates random word from the word arrays depending on the level chosen
 */
function runLevel(words) {
    randomWord = words[Math.floor(Math.random()*words.length)]
    openGameScreen();
    setRandomWord();
    console.log(randomWord);
    checkGuess();
}

/**
 * Splits letters of random word into array and sets the word for the new game 
 */
function setRandomWord() {
    currentWord = randomWord.toLowerCase();
    let wordArray = randomWord.split("");
    let html = "";
    for (let i of wordArray) {
      html = html + `<p data-letter="${i}"><span class="hidden-letter" data-letter="${i}">${i}</span></p>`;
    }
    let container = document.getElementById('word-area');
    container.innerHTML = html;
}

function checkGuess() {
   //event.preventDefault();
    let letterButtons = document.getElementsByClassName("letter");
    for (let letterButton of letterButtons) {
        letterButton.addEventListener("click", function(event){
            let letterPressed = this.getAttribute("data-key");
            letterButton.style.visibility = 'hidden';
            if (currentWord.includes(letterPressed)) { 
               let letterSpans = document.getElementsByTagName("span");
               for (let span of letterSpans) {
                   let spanValue = span.getAttribute("data-letter").toLowerCase();
                   if (letterPressed === spanValue) {
                        span.classList.remove("hidden-letter");
                        chosenLetters.push(letterPressed);
                        checkWord();
                   }
               }
            } else { 
             decreaseLives();
             console.log(lives);
            } 
            }
        //   if (this.getAttribute("data-key"))
        // console.log(this.getAttribute("data-key"));
        // console.log(typeof(this.getAttribute("data-key")));

        )
    }
}

function decreaseLives () {
    while (lives > 1) {
    lives--;
    return lives;
    }
    if (lives === 1) {
        missionAborted();
    } else {
        // do nothing
    }
}

function checkWord() {
    if (currentWord.length === chosenLetters.length){
        console.log("WINNER!");
        document.getElementById('rocket').classList.add('animation');
        setTimeout(missionAccomplished, 3500);
    }
}


function incrementScore() {

}

function incrementWrongAnswer() {

}


function missionAccomplished() {
    document.getElementById('container').innerHTML =`
    <div id="mission-accomplished">
            <h2>MISSION ACCOMPLISHED </h2>
            <p>WELL DONE SPACE CADET</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level level1" data-type="levelOne">Level 1</button>
                <button class="button-level level2" data-type="levelTwo">Level 2</button>
                <button class="button-level level3" data-type="levelThree">Level 3</button>
            </div>
            <div class="scores-area">
                <p id="blast-offs">No of Blast-offs: 0</p>
                <p id="grounded"> No of groundings: 0</p>
            </div>
        </div>`
        addLevelButtonListeners();
        chosenLetters = [];
        lives = 10;
}

function missionAborted() {
    document.getElementById('container').innerHTML =`
    <div id="mission-aborted">
            <h2>MISSION ABORTED</h2>
            <p>RETURN TO SPACE SCHOOL</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level level1" data-type="levelOne">Level 1</button>
                <button class="button-level level2" data-type="levelTwo">Level 2</button>
                <button class="button-level level3" data-type="levelThree">Level 3</button>
            </div>
            <div class="scores-area">
                <p class="blast-offs">No of Blast-offs: 0</p>
                <p class="grounded"> No of groundings: 0</p>
            </div>
        </div>
    `
    addLevelButtonListeners();
    chosenLetters = [];
    lives = 10;
}