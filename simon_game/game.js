

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
var userClickedPattern = [];

let level = 0;
let started = false;

//handles game start and level
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
  }
})

//plays audio file for buttons when pressed or generated.
function playSound(name) {
    let audio = new Audio (`sounds/${name}.mp3`);
    audio.play();
}

//animates buttons when clicked
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

//click handler function
$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");  
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

//random sequence generator
function nextSequence() {
    userClickedPattern = [];
    
    level++;
  $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(1000).fadeIn(1000);
    playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        let audio = new Audio ('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}