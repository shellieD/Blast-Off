//Wait for the DOM to finish loading before running the gaem
//Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
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
    
//function runGame() {
  //  let difficulty = {
    //    levelOneWords: ['Alien', 'Asteroid', 'Astronaut', 'Big Bang', 'Black Hole', 'Comet', 'Cosmic', 'Crater', 'Crew', 'Danger', 'Descent', 'Disaster', 'Distant', 'Dwarf Planet', 'Earth', 'Full Moon', 'Galaxy', 'Gravity', 'Horizon', 'Hubble', 'Impact', 'Jupiter', 'Kilometers', 'Launch', 'Launch Pad', 'Light Years', 'Lunar', 'Magnetic', 'Mars', 'Mercury', 'Meteor', 'Meteorite', 'Milky Way', 'Moon', 'NASA', 'Nebula', 'Newton', 'North Star', 'Nova', 'Neptune', 'Orbit', 'Outer-Space', 'Ozone', 'Particles', 'Planet', 'Probe', 'Proton', 'Quest', 'Rocket', 'Rotation', 'Science', 'Scientist', 'Shooting Star', 'Shuttle', 'Solar', 'Solar System', 'Space', 'Space Craft', 'Space Station', 'Star Dust', 'Stars', 'Stellar', 'Storms', 'Saturn', 'Twinkle', 'Universe', 'Uranus', 'Venus', 'Voyage'],
      //  levelTwoWords: ['Absolute', 'aerogel', 'aerospace', 'agency', 'air force', 'altitude', 'ambient', 'ammonia', 'analysis', 'anomaly', 'astronomer', 'astronomy', 'atmosphere', 'aurora borealis', 'byproduct', 'carbon dioxide', 'celestial', 'challenger', 'collision', 'colossal', 'commander', 'communication', 'constellation', 'corona', 'cosmology', 'cosmonaut', 'density', 'deploy', 'descendant', 'descent', 'discovery', 'double star', 'eclipse', 'ecliptic', 'Einstein', 'electron', 'ellipse', 'emission', 'engineer', 'equator', 'equinox', 'evolution', 'expedition', 'experiment', 'exploration', 'explosion', 'exposure', 'extraterrestrial', 'fireball', 'force field', 'formation', 'fossil fuel',  'fragment', 'galactic', 'galileo', 'gamma rays', 'gaseous', 'gravitation', 'Halley', 'hemisphere', 'hydraulic', 'ignition', 'impact', 'intergalactic', 'interplanetary', 'interstellar', 'magnitude', 'molecules', 'navigation', 'northern lights', 'observable', 'pioneer', 'planetarium', 'planetary', 'polestar', 'quasar', 'super nova', 'telescope', 'vaporise', 'velocity', 'wavelength'],
        //levelThreeWords: ['Aberration', 'Acceleration', 'Achievement', 'Adventure', 'Aerodynamics', 'aphelions', 'apogee', 'apotheosis', 'ascendant', 'azimuth', 'centrifugal force', 'combustion', 'composition', 'declination', 'disintegrate', 'domination', 'exobiology', 'expansion', 'fluorocarbon content', 'geocentric', 'geophysics', 'gyroscope', 'hypothesis', 'illumination', 'inosphere', 'jettison', 'Kuiper belt', 'luminosity', 'parallax', 'penumbra', 'propellant', 'propulsion', 'prototype', 'radiation', 'reflector', 'relativity', 'revolution', 'satellite', 'seismometer', 'stratosphere', 'subatomic', 'syzygy', 'trajectory', 'transmissions', 'turbulence', 'ultraviolet rays', 'weightlessness', 'zenith']    
   // }
   // if (let chosenDifficulty === difficulty[0]) {
     //   let chosenWord = difficulty[0][Math.floor(math.random()*difficulty[0].length)]
   // }
    //console.log(chosenWord);
//}

/** 
 * Selects random word from levelOneWords array
 */
function runLevelOne() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let levelOneWords = ['Alien', 'Asteroid', 'Astronaut', 'Big Bang', 'Black Hole', 'Comet', 'Cosmic', 'Crater', 'Crew', 'Danger', 'Descent', 'Disaster', 'Distant', 'Dwarf Planet', 'Earth', 'Full Moon', 'Galaxy', 'Gravity', 'Horizon', 'Hubble', 'Impact', 'Jupiter', 'Kilometers', 'Launch', 'Launch Pad', 'Light Years', 'Lunar', 'Magnetic', 'Mars', 'Mercury', 'Meteor', 'Meteorite', 'Milky Way', 'Moon', 'NASA', 'Nebula', 'Newton', 'North Star', 'Nova', 'Neptune', 'Orbit', 'Outer-Space', 'Ozone', 'Particles', 'Planet', 'Probe', 'Proton', 'Quest', 'Rocket', 'Rotation', 'Science', 'Scientist', 'Shooting Star', 'Shuttle', 'Solar', 'Solar System', 'Space', 'Space Craft', 'Space Station', 'Star Dust', 'Stars', 'Stellar', 'Storms', 'Saturn', 'Twinkle', 'Universe', 'Uranus', 'Venus', 'Voyage'];
    let levelOneRandomWord = levelOneWords[Math.floor(Math.random()*levelOneWords.length)]
    console.log(levelOneRandomWord);
}

/**
 * Selects random word from leveTwoWords array
 */
function runLevelTwo() {
    let levelTwoWords = ['Absolute', 'aerogel', 'aerospace', 'agency', 'air force', 'altitude', 'ambient', 'ammonia', 'analysis', 'anomaly', 'astronomer', 'astronomy', 'atmosphere', 'aurora borealis', 'byproduct', 'carbon dioxide', 'celestial', 'challenger', 'collision', 'colossal', 'commander', 'communication', 'constellation', 'corona', 'cosmology', 'cosmonaut', 'density', 'deploy', 'descendant', 'descent', 'discovery', 'double star', 'eclipse', 'ecliptic', 'Einstein', 'electron', 'ellipse', 'emission', 'engineer', 'equator', 'equinox', 'evolution', 'expedition', 'experiment', 'exploration', 'explosion', 'exposure', 'extraterrestrial', 'fireball', 'force field', 'formation', 'fossil fuel',  'fragment', 'galactic', 'galileo', 'gamma rays', 'gaseous', 'gravitation', 'Halley', 'hemisphere', 'hydraulic', 'ignition', 'impact', 'intergalactic', 'interplanetary', 'interstellar', 'magnitude', 'molecules', 'navigation', 'northern lights', 'observable', 'pioneer', 'planetarium', 'planetary', 'polestar', 'quasar', 'super nova', 'telescope', 'vaporise', 'velocity', 'wavelength'];
    let levelTwoRandomWord = levelTwoWords[Math.floor(Math.random()*levelTwoWords.length)]
    console.log(levelTwoRandomWord);
}

function runLevelThree() {
    let levelThreeWords = ['Aberration', 'Acceleration', 'Achievement', 'Adventure', 'Aerodynamics', 'aphelions', 'apogee', 'apotheosis', 'ascendant', 'azimuth', 'centrifugal force', 'combustion', 'composition', 'declination',  'disintegrate', 'domination', 'exobiology', 'expansion', 'fluorocarbon content', 'geocentric', 'geophysics', 'gyroscope', 'hypothesis', 'illumination', 'inosphere', 'jettison', 'Kuiper belt', 'luminosity', 'parallax', 'penumbra', 'propellant', 'propulsion', 'prototype', 'radiation', 'reflector', 'relativity', 'revolution', 'satellite', 'seismometer', 'stratosphere', 'subatomic', 'syzygy', 'trajectory', 'transmissions', 'turbulence', 'ultraviolet rays', 'weightlessness', 'zenith'];
    let levelThreeRandomWord = levelThreeWords[Math.floor(Math.random()*levelThreeWords.length)]
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