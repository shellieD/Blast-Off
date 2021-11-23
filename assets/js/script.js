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
    let levelOneWords = ['Alien', 'Asteroid', 'Astronaut', 'Big Bang', 'Black Hole', 'Comet', 'Cosmic', 'Crater', 'Crew', 'Danger', 'Descent', 'Disaster', 'Distant', 'Dwarf Planet', 'Earth', 'Full Moon', 'Galaxy', 'Gravity', 'Horizon', 'Hubble', 'Impact', 'Jupiter', 'Kilometers', 'Launch', 'Launch Pad', 'Light Years', 'Lunar', 'Magnetic', 'Mars', 'Mercury', 'Meteor', 'Meteorite', 'Milky Way', 'Moon', 'NASA', 'Nebula', 'Newton', 'North Star', 'Nova', 'Neptune', 'Orbit', 'Outer-Space', 'Ozone', 'Particles', 'Planet', 'Probe', 'Proton', 'Quest', 'Rocket', 'Rotation', 'Science', 'Scientist', 'Shooting Star', 'Shuttle', 'Solar', 'Solar System', 'Space', 'Space Craft', 'Space Station', 'Star Dust', 'Stars', 'Stellar', 'Storms', 'Saturn', 'Twinkle', 'Universe', 'Uranus', 'Venus', 'Voyage'];
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


