//Wait for the DOM to finish loading before running the gaem
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "levelOne") {
            runLevelOne();
            } else {
                if (this.getAttribute("data-type") === "levelTwo") {
                runLevelTwo();
                } else {
                    if (this.getAttribute("data-type") === "levelThree") {
                    runLevelThree();
                    }   
                }
            }
        })
    }
})

/**
 * changes inner HTML to display game screen when called.
 */
function openGameScreen() {
    document.getElementById('container').innerHTML =`
    <div id="game-area">
            <h3>Blast off to space by guessing the word correctly!<br>Good luck with your mission spacewalker.</h4>
            <div id="guessing-area">
                <div id="random-word">
                   <p> __  __  __  __  __  __  __</p>
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
                <div id="rocket">
                    <img src="assets/images/rocket.png" alt="Red rocket">
                </div>
            </div>
        </div>`
}
/** 
 * Selects random word from levelOneWords array
 */
function runLevelOne() {

    let levelOneWords = ['alien', 'asteroid', 'astronaut', 'big bang', 'black hole', 'comet', 'cosmic', 'crater', 'crew', 'danger', 'descent', 'disaster', 'Distant', 'Dwarf Planet', 'Earth', 'Full Moon', 'Galaxy', 'Gravity', 'Horizon', 'Hubble', 'Impact', 'Jupiter', 'Kilometers', 'Launch', 'Launch Pad', 'Light Years', 'Lunar', 'Magnetic', 'Mars', 'Mercury', 'Meteor', 'Meteorite', 'Milky Way', 'Moon', 'NASA', 'Nebula', 'Newton', 'North Star', 'Nova', 'Neptune', 'Orbit', 'Outer-Space', 'Ozone', 'Particles', 'Planet', 'Probe', 'Proton', 'Quest', 'Rocket', 'Rotation', 'Science', 'Scientist', 'Shooting Star', 'Shuttle', 'Solar', 'Solar System', 'Space', 'Space Craft', 'Space Station', 'Star Dust', 'Stars', 'Stellar', 'Storms', 'Saturn', 'Twinkle', 'Universe', 'Uranus', 'Venus', 'Voyage'];
    let levelOneRandomWord = levelOneWords[Math.floor(Math.random()*levelOneWords.length)]
    openGameScreen();
    console.log(levelOneRandomWord);
}

/**
 * Selects random word from leveTwoWords array
 */
function runLevelTwo() {
    let levelTwoWords = ['Absolute', 'aerogel', 'aerospace', 'agency', 'air force', 'altitude', 'ambient', 'ammonia', 'analysis', 'anomaly', 'astronomer', 'astronomy', 'atmosphere', 'aurora borealis', 'byproduct', 'carbon dioxide', 'celestial', 'challenger', 'collision', 'colossal', 'commander', 'communication', 'constellation', 'corona', 'cosmology', 'cosmonaut', 'density', 'deploy', 'descendant', 'descent', 'discovery', 'double star', 'eclipse', 'ecliptic', 'Einstein', 'electron', 'ellipse', 'emission', 'engineer', 'equator', 'equinox', 'evolution', 'expedition', 'experiment', 'exploration', 'explosion', 'exposure', 'extraterrestrial', 'fireball', 'force field', 'formation', 'fossil fuel',  'fragment', 'galactic', 'galileo', 'gamma rays', 'gaseous', 'gravitation', 'Halley', 'hemisphere', 'hydraulic', 'ignition', 'impact', 'intergalactic', 'interplanetary', 'interstellar', 'magnitude', 'molecules', 'navigation', 'northern lights', 'observable', 'pioneer', 'planetarium', 'planetary', 'polestar', 'quasar', 'super nova', 'telescope', 'vaporise', 'velocity', 'wavelength'];
    let levelTwoRandomWord = levelTwoWords[Math.floor(Math.random()*levelTwoWords.length)]
    openGameScreen();
    console.log(levelTwoRandomWord);
}

function runLevelThree() {
    let levelThreeWords = ['Aberration', 'Acceleration', 'Achievement', 'Adventure', 'Aerodynamics', 'aphelions', 'apogee', 'apotheosis', 'ascendant', 'azimuth', 'centrifugal force', 'combustion', 'composition', 'declination',  'disintegrate', 'domination', 'exobiology', 'expansion', 'fluorocarbon content', 'geocentric', 'geophysics', 'gyroscope', 'hypothesis', 'illumination', 'inosphere', 'jettison', 'Kuiper belt', 'luminosity', 'parallax', 'penumbra', 'propellant', 'propulsion', 'prototype', 'radiation', 'reflector', 'relativity', 'revolution', 'satellite', 'seismometer', 'stratosphere', 'subatomic', 'syzygy', 'trajectory', 'transmissions', 'turbulence', 'ultraviolet rays', 'weightlessness', 'zenith'];
    let levelThreeRandomWord = levelThreeWords[Math.floor(Math.random()*levelThreeWords.length)]
    openGameScreen();
    console.log(levelThreeRandomWord);
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

function missionAborted {
    document.getElementById('mission-aborted').innerHTML =`
    
    `

}