// Declare variables below to save the different divs of your story.
let optionOneButton = document.querySelector(".option-one");
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");

let optionThreeButton = document.querySelector(".option-three");
let killThemButton = document.querySelector(".kill-them-button");

let optionFourButton = document.querySelector(".option-four");
let stealFromJB = document.querySelector(".steal-from-JB");

let optionSevenButton = document.querySelector(".option-seven");
let runEndButton = document.querySelector(".Run-end");

let optionEightButton = document.querySelector(".option-eight");
let hideEndButton = document.querySelector(".Hide-end");

//Pogue button code
let optionTwoButton = document.querySelector(".option-two");
let optionTwoScreen = document.querySelector(".option-two-screen");

let optionFiveButton = document.querySelector(".option-five");
let yesButton = document.querySelector(".Yes");

let optionSixButton = document.querySelector(".option-six");
let noButton = document.querySelector(".No");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOneButton.addEventListener("click", function() {
    storyOpening.style.display = "none";
    optionOneScreen.style.display = "block";
});

optionThreeButton.addEventListener("click",function (){
    optionOneScreen.style.display = "none";
    killThemButton.style.display = "block";
});

optionFourButton.addEventListener("click", function (){
    optionOneScreen.style.display = "none";
    stealFromJB.style.display = "block";
})

optionSevenButton.addEventListener("click", function(){
    stealFromJB.style.display = "none";
    runEndButton.style.display = "block";
})

optionEightButton.addEventListener("click", function() {
    stealFromJB.style.display = "none";
    hideEndButton.style.display = "block";
})

optionTwoButton.addEventListener("click", function (){
    storyOpening.style.display = "none";
    optionTwoScreen.style.display = "block";
})

optionFiveButton.addEventListener("click", function (){
    optionTwoScreen.style.display = "none";
    yesButton.style.display = "block";
})

optionSixButton.addEventListener("click", function (){
    optionTwoScreen.style.display = "none";
    noButton.style.display = "block";
})

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });