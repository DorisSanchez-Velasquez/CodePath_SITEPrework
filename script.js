//GLOBAL CONSTANTS
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence




//GLOBAL VARIABLES 
var pattern = [];
var patternLength = 10;
var mistakes = 0;
var attempts = 3;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var timeRemaining = 20;
var resetGame = false;
var timer;
var totalPoints;




//THIS IS THE CODE FOR CREATING THE PATTERN FOR EACH GAME PLAY
//Every time the user starts the game, a new pattern is created to follow.
function createPattern(){
    pattern = [];
    for(let x = 0; x < patternLength; x++)
    {
        pattern.push(getRandomIntInclusive(1,8)); //Random number chosen to create random pattern 
    }
}

//Returns a random number between one and eight (inclusive)
function getRandomIntInclusive(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}





//THIS IS THE CODE FOR GAME FUNCTIONALITY (STARTING, LOSING, WINNING, WRONG GUESS ETC. )

//Start the Game
function startGame(){
    createPattern();
  
  //initialize game variables
  mistakes = 0;
  totalPoints = 0;
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  clearInterval(timer);
  startGameSound();
  document.getElementById("startBtn").classList.add("hidden"); //Hide the start buttons and show the stop button
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("attemptsMade").innerHTML = attempts; //Initialize attempts
  playClueSequence(); //Start the game sequence
}

//Play a single clue at every sequence
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Play the entire clue sequence and add new clue for the pattern each turn
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to intial wait time
  for(let i=0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in" + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 15;
  }
  
  //Initializes the timer every time a new sequence is played
  timeRemaining = 20;
  resetGame = false;
  clearInterval(timer);
  timer = setInterval(decrementTime, 1000); //Timer will decrement by one second each time
}

//Code for decrementing the timer and calls stopGame function when timer runs out
function decrementTime(){
  document.getElementById("timer").innerHTML = timeRemaining; //Update the timer
  timeRemaining -= 1; //Decrement by one second
  
  if(timeRemaining == 0) //If the timer runs out,
  {
    if(!resetGame){
      stopGame(); //Stop the game
      alert("RAN OUT OF TIME!!! BETTER LUCK NEXT TIME"); //Send game over message
    }
    clearInterval(timer); //Restart timer
  }
}

//Code functionality for each user guess
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){ //If user no longer playing game, go back to main function
    return;
  }
  
  //IF GUESS IS CORRECT, CONTINUE THE SEQUENCE OR SEND WIN GAME MESSAGE
  if(pattern[guessCounter] == btn){
    //GUESS WAS CORRECT
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN
        gameFinishedSound();
        winGame();
        resetGame = true;
      }else{
        //Pattern correct. Add next segment of clue sequence
        progress++;
        updatePoints();
        playClueSequence();
      }
    }else{
      //so far so good . . . check the next guess
      guessCounter++;
      
    }
  }else{ //IF GUESS IS INCORRECT, DECREMENT REMAINING LIVES OR SEND GAME OVER MESSAGE
    //Guess was incorrect
    //GAME OVER: LOSE!
    mistakeMadeSound();
    mistakes++;
    document.getElementById("attemptsMade").innerHTML = attempts - mistakes; //Update remaining lives
    if(mistakes >= attempts){ //If user makes 3 mistakes, send game over message
      gameOverSound();
      loseGame();
      resetGame = true;
    }
  }
}

//Code for updating points
function updatePoints(){
  pointsGainedSound(); //Play audio for earning points
  totalPoints += 1; //Increment points
  document.getElementById("points").innerHTML = totalPoints; //Update display for points
}






//THIS IS THE CODE FOR LIGHT UP FUNCTIONALITY OF BUTTONS
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}




//THIS IS THE CODE FOR ENDING THE GAME PLAY (TO WIN, LOSE, OR STOP GAME)

//Losing the Game
function loseGame(){
  stopGame();
  alert("GAME OVER! YOU LOST! LET'S TRY AGAIN!");
}

//Winning the Game
function winGame(){
  stopGame();
  alert("GAME FINISHED! YOU WON!!!! READY FOR A NEW CHALLENGE?!")
}

//Stopping the Game
function stopGame()
{
  gamePlaying = false;
  timeRemaining = 20;
  totalPoints = 0;
  clearInterval(timer);
  document.getElementById("timer").innerHTML = 0;
  document.getElementById("points").innerHTML = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}





//THIS IS THE CODE FOR ALL GAME SOUND EFFECTS (NOT ASSOCIATED WITH BUTTONS' AUDIO)

//Starting Game Play
function startGameSound(){
  document.getElementById("startGame").play();
}

//User Makes Mistake
function mistakeMadeSound(){
  document.getElementById("mistakeMade").play();
}

//User wins the game
function gameFinishedSound(){
  document.getElementById("gameFinished").play();
}

//User earns a point
function pointsGainedSound(){
  document.getElementById("pointsGained").play();
}

//User loses the game
function gameOverSound(){
  document.getElementById("gameOver").play();
}






//THIS IS THE CODE FOR ALL SOUND SYNTHESIS OF BUTTONS

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 625,
  7: 700,
  8: 760
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
