# Blast-Off - A modern alternative to hangman

This interactive front-end website has been developed to entertain space-enthusiasts whilst helping to grow and develop their space-related vocabulary through a challenging word-based game.

Blast-off is a modern twist on the good old fashioned, pen and paper based game Hangman.  Instead of slowly bringing an innocent stick-man to his untimely death by hanging, the user is challenged to guess a space-related word, letter-by-letter.  If the word is guessed correctly the rocket will blast-off into space, but if they get the answer wrong or run out of lives, the rocket will remain grounded.

![Am I Responsive Screenshots](assets/readme-images/am-i-responsive.png)

Link to deployed site:
<br>
[Blast-Off - A Modern Alternative to Hangman](https://shellied.github.io/Blast-Off/)


## UX - User Experience Design
----
### The Strategy Plane
----
#### Initial Concept

This project has been developed as part of the [Code Institute's](https://codeinstitute.net/) Diploma in Full-Stack Software Development.  The aim is to create a game that will demonstrate the skills I have learnt in HTML, CSS and Javascript

My idea for this game was to create an alternative version of the traditional pen-and-paper based game Hangman.  This game was to be based on space, and use space-themed vocabulary and include a fun animation of a rocket that would 'Blast-Off' if the user guessed the word correctly, or wobbled and toppled over if the user used all lives and did not guess the word correctly.  I wanted to create a site that could fit on one screen, despite the device used, be intuitive to use and have a fun, retro feel about it.  

The target audience I would say, would be for children from age 6 upwards, however it is suitable for all, with families being able to sit together to play whilst testing their spelling and increasing their space-related vocabulary.  This game could also be used in schools for topic related work and provides an opportunity for learning i.e. spelling, researching the meaning of the words generated if unknown etc.

The game could be easily adapted to fit a range of themes by simply changing the random words to be guessed, the HTML content and the colors, images and vectograms used. 

#### Site Goals

* To provide a fun, interactive game that is simple to use.
* To provide a game with varying levels of difficulty. 
* To provide options for the user to toggle sound effects on and off as they wish, where the sound is muted by default.
* To provide a fully responsive game for all device types.
* To provide an opportunity for learning.

#### User Stories

The site's strategy is based on satisfying the below user stories:

As a user:-

* I want the purpose of the game to be apparent.
* I want the game to be easy to navigate.
* I want the game to be aesthetically pleasing and styled relevant to the nature of the game.
* I want to be able to control the sound, which I would like to be muted by default.
* I would like to be able to select the difficulty level of the game.
* I want the controls to be easy to use and intuitive.
* I want to be able to keep score of the games I win and lose.
* I want to be able to reset the game.
* I want the game to be challenging.
* I want the game to have an element of fun.
* I want to be able to use the game on a wide range of devices.
* I want to be able to use a screen reader, if I need to, to help me play the game. 

### The Scope Plane
----

Features which must be included:

* Instructions on how to play the game which are easy to find and understand.
* Three levels of difficulty - easy/well-known words used for level one and more difficult/obscure words for level three and something in between for level two.
* The game should fit the viewport of the device and no scrolling should be required.
* There should be an option to reset the game board if the user wishes to start again.
* There should be a set amount of lives to make the game more challenging.
* Increment the correct answers and the incorrect answers so the user can keep track of how many games won/lost.
* The aesthetics of the game should be visually appealing and consistent with the space theme of the game.

Features that should be included:

* There should be an animation when the user wins or loses a game to make the game more fun to play.
* There should be sound effects to alert the user when a correct or incorrect letter has been picked and when the rocket takes off, or fails to take off.
* There should be a toggle button to allow the user turn sounds on and off as desired.  This should be visible at all times throughout the game.

Features that would be nice to have:

* Display the definition or facts about the correctly guessed word to provide a learning opportunity for the user.
* A button to generate a hint to help the user the guess more difficult words.

### The Structure Plane
----

### The Skeleton Plane
----

#### Wireframes

The below mockups were made using Balsamiq.  The design is simple but effective.  

Mobile Wireframes

<details>
<summary>Mobile Wireframes</summary>
<br>

![Wireframes](assets/wireframes/mobile-wireframes.png)
</details>

<br>

<details>
<summary>Desktop Wireframes</summary>
<br>
Desktop Wireframes
<br>

![Wireframes](assets/wireframes/desktop-wireframes1.png)
![Wireframes](assets/wireframes/desktop-wireframes2.png)
</details>

<br>

### The Surface Plane
----
#### Imagery

Once satisfied with the layout and structure of the site, I got to work on sourcing a background image that would be striking, pleasing on the eye and would connect the user to the theme of the game. The below background image was found on freepik.com and was created by [Vectorpouch](https://www.freepik.com/vectors/star).  As soon as I saw this background, I knew I had to use it as it was almost exactly what I was envisaging in my mind when thinking about the overall look and feel of the game.  

![Background Image](assets/readme-images/background.png)

#### Color Scheme

I wanted to keep the color scheme simple and so opted for plain white text to set a high colour contrast for accessability best practice and used [imagecolorpicker.com](https://imagecolorpicker.com/) to pull colours from the background image.  I chose a deep blue background colour to use for the main container div on the page, a shade of deep purple for all buttons and a lighter purple to create differentiation when buttons are hovered over.

I used [EightShapes Contrast Grid](https://contrast-grid.eightshapes.com) to ensure that all text and background combinations used met the required contrast ratios in compliance with [WCAG 2.0 minimum contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

![Contrast Grid](assets/readme-images/contrast-grid.png)

#### Typography

I wanted to give the game a science-fiction feel and what better to do that with monospaced fonts.  I used 'Space Mono' for the main body text and buttons throughout the site and for the page heading I used Syne Mono, which gives a nod towards the 90's American science fiction drama 'The X Files'.  (Moulder and Skully would be proud!) Both were sourced from [Google Fonts](https://fonts.google.com/)

In the below screenshot, you can see how both fonts pair really nicely together.

![Typography](assets/readme-images/header.png)

### Features

#### Existing Features
The main heading and tag line ensure that the users who are already familiar with 'hangman' will know they have landed on a game page.  See above image under 'Typography'.

Directly underneath the heading is a sound toggle button which will change to show the user whether the sound is on or off.  By default the sounds are set to mute to provide a good user experience (no one wants to be caught out whilst playing games at work!)

<br>

Sound Muted 

<br>

![Sound off](assets/readme-images/sound-off.png) 

Sound Un-muted 

<br>

![Sound on](assets/readme-images/sound-on.png)

<br>

For users who are unfamiliar with hangman, there is a brief outline of the rules, which are simple and easy to understand.

<br>

![Rules of Play](assets/readme-images/rules.png)

Underneath the rules there are buttons to allow the user to select the difficulty of the level at the start of the game.  These same buttons are also present on the 'Mission Accomplished' screen when a user has won a game, and the 'Mission Aborted' screen when a user has lost a game.  This provides really nice consistency across all parts of the game.  The user does not have to go searching for ways to change the levels at any point as they are displayed on all screens with the exception of the game screen.

<br>
 
 ![Difficulty Buttons](assets/readme-images/level-buttons.png)

 <br>

 When the user selects a level the HTML in the container is replaced with the game screen.  The game screen contains:-

 * Another brief description of the rules.  
 * Words of encouragement for the player.
 * A hidden word, the length of which is indicated by a dashed line for each letter in the word.
 * Letter buttons, which change colour when hovered over and disappear when chosen to prevent them being chosen again. 
 * A counter to show how many remaining lives are left.  The counter decreases by one each time an incorrect letter is guessed and each game starts with 10 lives.
 * A counter to show how many 'Blast-Offs' (games won) they have achieved and similarly a counter to show how many 'Groundings' (games lost).  On the first game, these are set to zero to show no games yet won or lost.
 * A reset button that will restart the game from the beginning, hiding any correctly guessed letters again and reshowing any letter buttons that have been hidden - NOTE: this does not generate a new word, but simply allows the user to restart guessing the same word.  In hindsight, I think generating a new word here from the same difficulty level may have been better.
 * A vectogram of a rocket.  This is animated when a game is won or lost.  If the former, the rocket will blast off the page, if the latter, it wobbles, and topples over.

 If the sounds are on, the follow events will trigger sounds effects:-

 * Choosing a correct letter will trigger a coin-collect type sound.
 * Choosing an incorrect letter will trigger a bubble pop type sound (which ties in nicely with the letter button disappearing - almost popping away).
 * When the rocket blasts off, a take-off type sound is triggered.
 * When the rocket is grounded, an engine power-down sound will be triggered.

 <br>

 ![Game Screen](assets/readme-images/game-area.png)

<br>

One a game is won or lost and the animation has finished, the HTML in the container is then replaced either with the 'Mission Accomplished' message or the 'Mission Aborted' message.  The difficulty buttons are displayed again, and the user is able to select which level they would like to play next.  Blast-off/Grounding scores are incremented accordingly to allow the user to keep track of how well (or how awfully) they are playing.

<br>

![Mission Accomplished](assets/readme-images/mission-accomplished.png)

<br>

![Mission Aborted](assets/readme-images/mission-aborted.png)

<br>


#### Features Left to Implement

## Technologies Used. 

* HTML
* CSS
* JavaScript

* 
### Gitpod Extensions???

## Testing
* W3C Validator Testing - HTML / CSS
* Wave
* [JSHint](https://jshint.com/) - I have loaded the JavaScript file into the linter and the following metrics and warnings were produced:-

 ![JSHint](assets/readme-images/jshint.png)

 The warnings indicate that it could be better to declare variables within the functions themselves, however I think this could cause the code to become verbose and I have therefore chosen to use  descriptive names to declare the variables and have provided docstrings to provide clear context for the functions.  This should prevent any confusing semantics.

 <br>

 The undefined variables refer to variables that are defined in the separate data.js file.  These are the long list of space related words for each level of the game: levelOneWords, levelTwoWords and levelThreeWords.   I felt it better to keep these separate from the main code as there were so many of them and would provide better organisation. 

 <br> 

 Following testing in the linter, the unused variable 'wordArea' has now been removed from the script.js file. 
 

* Lighthouse - I used Lighthouse in Chrome Dev Tools to test the Performance, Accessibility, Best Practices and SEO scores of the site for both desktop and mobile.  The scores were perfect for desktop devices, and slightly under on performance at 94 for mobile.  

<br> 

![Lighthouse Score Desktop](assets/readme-images/lighthouse-desktop.png)

<br>

![Lighthouse Score Mobile](assets/readme-images/lighthouse-mobile.png)

One of the reasons for the performance score being slightly lower for mobiles was the size of the files being transferred.  The background image I noticed was over 2MB so I decided to use [TinyPNG](https://tinypng.com/) to compress the image.  The image was reduced to 459KB and once replaced in the CSS file, the following Lighthouse scores were produced:-

<br>





I have regularly tested all aspects of the games functionality including all buttons, animations, sounds and responsiveness during the build process and have used Dev Tools in Chrome for responsivity across the following devices:-

* Galaxy S5
* Pixel 3
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPhone 11 Pro
* iPad
* iPad Pro
* Surface Due
* Galaxy Fold
* Nest Hub
* Nest Hub Max

I have also tested the site physically on the below devices:

* iPhone 13 pro
* iPhone 11 Pro
* Mac Book Pro 
* Dell Latitude 5310 (Laptop)

I have also regularly tested the site using the following browsers:-

* Chrome
* Safari
* Firefox
* Edge


## Bugs
### Current Bugs
### Resolved Bugs

## Deployment
* Github Pages
* Forking

## Credits

* [FreeFormatter.com](https://www.freeformatter.com/) - I used the HTML, CSS and JavaScript Beautifiers to 

### Media

### Acknowledgments







