//Wait for the DOM to finish loading before running the game.
//Get the button elements and add event listeners to them.

document.addEventListener('DOMContentLoaded', function() {
    openGameLevelArea();
    addLevelButtonListeners();
    addSoundButtonListeners();
});

var wordArea = document.getElementById('word-area');

/**
 * Changes inner HTML to display game screen when called.
 */

var lives = 10;
var randomWord = '';
var currentWord;
var chosenLetters = []; // creates an empty array for chosen words to be pushed to
var correctScore = 0;
var incorrectScore = 0;
var soundOn = false; //set sounds to be muted by default

/**
 * Adds event listeners to buttons used to select game levels.  Calls runLevel function to generate random word from correct array for level selected when button clicked.
 */
function addLevelButtonListeners() {
    let buttons = document.getElementsByClassName('button-level');
    for (let button of buttons) {
        button.addEventListener('click', function(event){
            if (this.getAttribute('data-type') === 'levelOne') {
                runLevel(levelOneWords);
            } else if (this.getAttribute('data-type') === 'levelTwo') {
                runLevel(levelTwoWords);
            } else if (this.getAttribute('data-type') === 'levelThree') {
                runLevel(levelThreeWords);
            }   
        });
    }
}

/**
 * Adds event listeners to sound icon to enable user to toggle if sound effects are on or off.
 */
function addSoundButtonListeners() {
    let soundButton = document.getElementsByClassName('sound-button')[0];
    console.log(soundButton);
    soundButton.addEventListener('click', function() {
        if (soundOn === false) {
            soundButton.innerHTML = `<i class="fas fa-volume-up"></i>`;
        } else {
            soundButton.innerHTML = `<i class="fas fa-volume-mute"></i>`;
        }
        soundOn = !soundOn;
    });
}

/**
 * Inserts HTML into main container for user to select the game level they would like to play.
 */
function openGameLevelArea() {
    document.getElementById('container').innerHTML = `
    <div id="game-level-area">
            <h2>Welcome Astronauts!</h2>
            <p>The aim of the game is to guess the space-related word, letter-by-letter, before your lives are up to blast-off to space.  Use too many of your lives and your spaceship will remain grounded *sad-astronaut-face*</p>
            <div class="difficulty-buttons">
                <h3>Choose Level</h3>
                <button class="button-level level1" data-type="levelOne" aria-label="Level One">Level 1</button>
                <button class="button-level level2" data-type="levelTwo" aria-label="Level Two">Level 2</button>
                <button class="button-level level3" data-type="levelThree" aria-label="Level Three">Level 3</button>
            </div>
        </div>`;
}

/** 
 * Inserts HTML into main container for user to play game.  Inserts hidden random word, letter buttons, reset buttons, lives and score count.
 */
function openGameScreen() {
    document.getElementById('container').innerHTML =`
    <div id="game-area">
        <p>Blast off to space by guessing the word correctly.</p> 
        <p>Good luck with your mission spacewalker.<p>
            <div id="guessing-area">
                <div id="word-area">
                </div>
                <div id="alphabet">
                    <button class="letter" data-key="a" aria-label="Letter A">A</button>
                    <button class="letter" data-key="b" aria-label="Letter B">B</button>
                    <button class="letter" data-key="c" aria-label="Letter C">C</button>
                    <button class="letter" data-key="d" aria-label="Letter D">D</button>
                    <button class="letter" data-key="e" aria-label="Letter E">E</button>
                    <button class="letter" data-key="f" aria-label="Letter F">F</button>
                    <button class="letter" data-key="g" aria-label="Letter G">G</button>
                    <button class="letter" data-key="h" aria-label="Letter H">H</button>
                    <button class="letter" data-key="i" aria-label="Letter I">I</button>
                    <button class="letter" data-key="j" aria-label="Letter J">J</button>
                    <button class="letter" data-key="k" aria-label="Letter K">K</button>
                    <button class="letter" data-key="l" aria-label="Letter L">L</button>
                    <button class="letter" data-key="m" aria-label="Letter M">M</button>
                    <button class="letter" data-key="n" aria-label="Letter N">N</button>
                    <button class="letter" data-key="o" aria-label="Letter O">O</button>
                    <button class="letter" data-key="p" aria-label="Letter P">P</button>
                    <button class="letter" data-key="q" aria-label="Letter Q">Q</button>
                    <button class="letter" data-key="r" aria-label="Letter R">R</button>
                    <button class="letter" data-key="s" aria-label="Letter S">S</button>
                    <button class="letter" data-key="t" aria-label="Letter T">T</button>
                    <button class="letter" data-key="u" aria-label="Letter U">U</button>
                    <button class="letter" data-key="v" aria-label="Letter V">V</button>
                    <button class="letter" data-key="w" aria-label="Letter W">W</button>
                    <button class="letter" data-key="x" aria-label="Letter X">X</button>
                    <button class="letter" data-key="y" aria-label="Letter Y">Y</button>
                    <button class="letter" data-key="z" aria-label="Letter Z">Z</button>
                </div>
                <div id="reset-button">
                    <button class="reset" aria-label="Reset">Reset</button>
                </div>
                <div>
                    <p id="remaining-lives">Remaining Lives: ${lives}</p>
                </div>
                <div class="scores-area">
                    <p class="blast-offs">No of Blast-offs: ${correctScore}</p>
                    <p class="grounded"> No of groundings: ${incorrectScore}</p>
                </div>
                <div>
                    <img src="assets/images/rocket.png" alt="Red rocket" id="rocket">
                </div>
            </div>
    </div>`;
    reset();
}

/** 
 * Generates random word from the word arrays depending on the level chosen.  Words are passed through the function from the arrays declared in the data.js file.
 */
function runLevel(words) {
    randomWord = words[Math.floor(Math.random()*words.length)];
    openGameScreen();
    setRandomWord();
    checkGuess();
}

/**
 * Splits letters of random word into array and sets the word for the new game. 
 */
function setRandomWord() {
    currentWord = randomWord.toLowerCase();
    let wordArray = randomWord.split('');
    let html ='';
    for (let i of wordArray) {
      html = html + `<p data-letter="${i}"><span class="hidden-letter" data-letter="${i}">${i}</span></p>`;
    }
    let container = document.getElementById('word-area');
    container.innerHTML = html;
}

/**
 * Checks whether the currentWord includes the letter guessed.
 * If the guessed letter is included in the currentWord array, then remove the 'hidden-letter' class to reveal the letter in it's correct position to the user.
 * Push the chosenLetter (if included in the currentWord array) to the letterPressed array, then run the checkWord function.
 * If the chosenLetter is not included in the currentWord, then decrease the lives.
 */
function checkGuess() {
    let letterButtons = document.getElementsByClassName('letter');
    for (let letterButton of letterButtons) {
        letterButton.addEventListener('click', function(event){
            let letterPressed = this.getAttribute('data-key');
            letterButton.style.visibility = 'hidden';
            if (currentWord.includes(letterPressed)) { 
               let letterSpans = document.getElementsByTagName('span');
               for (let span of letterSpans) {
                   let spanValue = span.getAttribute('data-letter').toLowerCase();
                   if (letterPressed === spanValue) {
                        span.classList.remove('hidden-letter');
                        chosenLetters.push(letterPressed);
                        checkWord();
                        if (soundOn === true) {
                            let audio = document.getElementById('correct');
                            audio.play();
                        }
                   }
                }
            } else { 
             decreaseLives();  
             if (soundOn === true) {
                let audio = document.getElementById('incorrect');
                audio.play();
            }   
            } 
    });
    }
}

/** 
 * Decrease lives by 1 if chosenLetter does not appear in currentWord.
 */
function decreaseLives () {
    if (lives > 0) {
        lives--;
        document.getElementById('remaining-lives').innerHTML = `<p id="remaining-lives">Remaining Lives: ${lives}</p>`;
    } else if (lives === 0) {
        incrementWrongAnswer();  
        let letterButtons = document.getElementsByClassName('letter');
        for (let letterButton of letterButtons) {
            letterButton.style.visibility = 'hidden';
        }
        if (soundOn === true) {
            let audio = document.getElementById('powerdown');
            setTimeout(rocketSound(audio), 1000);
        } 
        document.getElementById('rocket').classList.add('animation-shake'); 
        setTimeout(missionAborted, 3500);
    }
}

/**
 * Checks whether the chosen letters match the correct word (by comparing the length of the arrays).  If the length of the length of the arrays match then the user 
 * has won and the flying rocket animation is triggered and then the mission accomplished screen is shown and the blast off score is incremented.
 */
function checkWord() {
    if (currentWord.includes(' ')) { // Checking if word contains space e.g black hole and if so checks the length of the currentWord minus 1 (to account for the space) against the length of the chosenLetter array.
        if (currentWord.length - 1 === chosenLetters.length) { 
        incrementScore();
        let letterButtons = document.getElementsByClassName('letter');
            for (let letterButton of letterButtons) {
                letterButton.style.visibility = 'hidden';
            }
        document.getElementById('rocket').classList.add('animation');
        setTimeout(missionAccomplished, 3500);
        }
    } else if (currentWord.length === chosenLetters.length){
        incrementScore();
        let letterButtons = document.getElementsByClassName('letter');
            for (let letterButton of letterButtons) {
                letterButton.style.visibility = 'hidden';
            }
        if (soundOn) {
            let audio = document.getElementById('takeoff');
            setTimeout(rocketSound(audio), 1000);
        } 
        document.getElementById('rocket').classList.add('animation'); 
        setTimeout(missionAccomplished, 3500);
    } else {
        // do nothing
    }
}

/**
 * Triggers the rocket sound when called - added as a slight delay was required on the sound to fit with the animation.
 */
function rocketSound(audio) {
    audio.play();
}

/**
 * Allows the user to reset the game screen by removing any guessed letters from the array, re-applying the visible property to the letter buttons and re-hing any 
 * correctly guessed letters.
 */
function reset() {
    let resetButton = document.getElementsByClassName('reset')[0];
    resetButton.addEventListener('click', function() {
        let letterButtons = document.getElementsByClassName('letter');
        for (let letterButton of letterButtons) {
            letterButton.style.visibility = 'visible';
        }
        chosenLetters = [];
        lives = 10;
        document.getElementById('remaining-lives').innerHTML = `<p id="remaining-lives">Remaining Lives: 10</p>`;
        let letterSpans = document.getElementsByTagName('span');
        for (let letter of letterSpans){
            letter.classList.add('hidden-letter');
        }
    });
}  

/**
 * Increments the blast-off score when a game is won.
 */
function incrementScore() {
    correctScore++;
    document.getElementsByClassName('blast-offs').innerHTML = `<p class="blast-offs">No of Blast-offs: ${correctScore}</p>`;
}

/** 
 * Increments the grounding score when a game is lost. 
*/
function incrementWrongAnswer() {
    incorrectScore++;
    document.getElementsByClassName('grounded').innerHTML = `<p class="grounded">No of Groundings: ${incorrectScore}</p>`;
}

/**
 * Changes the HTML to show the Mission Accomplished message when a game is won.
 */
function missionAccomplished() {
    document.getElementById('container').innerHTML =`
    <div id="mission-accomplished">
            <h2>MISSION ACCOMPLISHED </h2>
            <p>WELL DONE SPACE CADET</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level level1" data-type="levelOne" aria-label="Level One">Level 1</button>
                <button class="button-level level2" data-type="levelTwo" aria-label="Level Two">Level 2</button>
                <button class="button-level level3" data-type="levelThree" aria-label="Level Three">Level 3</button>
            </div>
            <div class="scores-area">
                <p class="blast-offs">No of Blast-offs: ${correctScore}</p>
                <p id="grounded"> No of groundings: ${incorrectScore}</p>
            </div>
        </div>`;
        addLevelButtonListeners();
        chosenLetters = [];
        lives = 10;
}


/** 
 * Changes the HTML of the container to show the mission aborted screen if the game is lost
 */
function missionAborted() {
    document.getElementById('container').innerHTML =`
    <div id="mission-aborted">
            <h2>MISSION ABORTED</h2>
            <p>RETURN TO SPACE SCHOOL</p>
            <div class="difficulty-buttons">
                <h3>To play again</h3>
                <h3>choose level</h3>
                <button class="button-level level1" data-type="levelOne" aria-label="Level One">Level 1</button>
                <button class="button-level level2" data-type="levelTwo" aria-label="Level Two">Level 2</button>
                <button class="button-level level3" data-type="levelThree" aria-label="Level Three">Level 3</button>
            </div>
            <div class="scores-area">
                <p class="blast-offs">No of Blast-offs: ${correctScore}</p>
                <p class="grounded"> No of groundings: ${incorrectScore}</p>
            </div>
        </div>`;
    addLevelButtonListeners();
    chosenLetters = [];
    lives = 10;
}