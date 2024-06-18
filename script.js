var playerScore = 0;
var computerScore = 0;
var ball = 0;
var ball1 = 0;
var target1 = 0;
var runs = document.getElementById('runs');
var runs1 = document.getElementById('runs1');
var user = document.getElementById('user');
var user1 = document.getElementById('user1');
var comp = document.getElementById('computer');
var comp1 = document.getElementById('computer1');
var balls = document.getElementById('balls');
var balls1 = document.getElementById('balls1');
var target = document.getElementById('target');
var st =document.getElementById('st');
const button =document.querySelectorAll('.btn');
const Score=document.querySelector('#Score');
reset();


document.addEventListener("DOMContentLoaded", function() {
    let storedHighScore = localStorage.getItem('highScore');
    if (storedHighScore !== null) {
        Score.innerHTML = storedHighScore;
    }
});

function play(playerChoice) {
  var computerChoice = Math.floor(Math.random() * 7);
  if (batChange === 1) {
    if (playerChoice === computerChoice) {
      st.innerHTML = "You are Bowling";
      alert("Out! Your score: " + playerScore + " Now you are bowling");
      batChange = 0;
      balls.innerHTML = `${ball}`;
      user.innerHTML = `${playerChoice}`;
      comp.innerHTML = `${computerChoice}`;
      runs.innerHTML = `${playerScore}`;
      target.innerHTML = `${target1}`;
      playerChoice = '';
      highScore();
      computerTurn(playerChoice);
      return;
    } else {
      playerScore += playerChoice;
      ball++;
      target1 += playerChoice;
      balls.innerHTML = `${ball}`;
      user.innerHTML = `${playerChoice}`;
      comp.innerHTML = `${computerChoice}`;
      runs.innerHTML = `${playerScore}`;
      target.innerHTML = `${target1}`;
      st.innerHTML = "You are Batting";
    }
  } else {
    computerTurn(playerChoice);
  }
}

var isFirstTurn = true;
ball1 = -1;

function computerTurn(playerChoice) {
  var computerChoice1;
  st.innerHTML = "You are Bowling";

  if (isFirstTurn) {
    computerChoice1 = 0;
    isFirstTurn = false;
  } else {
    computerChoice1 = Math.floor(Math.random() * 7);
  }

  if (playerChoice === computerChoice1) {
    if (target1 > computerScore) {
      balls1.innerHTML = `${ball1}`;
      user1.innerHTML = `${playerChoice}`;
      comp1.innerHTML = `${computerChoice1}`;
      runs1.innerHTML = `${computerScore}`;
      st.innerHTML = 'Congratulations You Won' + " Make sure to reset";
      setTimeout(function() {
        button.disabled = true;
      }, 2000);
      setTimeout(reset, 2000);
    } else {
      balls1.innerHTML = `${ball1}`;
      user1.innerHTML = `${playerChoice}`;
      comp1.innerHTML = `${computerChoice1}`;
      runs1.innerHTML = `${computerScore}`;
      st.innerHTML = 'Awww Bot won' + " Make sure to reset";
      batChange = 1;
      setTimeout(reset, 2000);
    }
  } else if (target1 < computerScore) {
    if (target1 > computerScore) {
      balls1.innerHTML = `${ball1}`;
      user1.innerHTML = `${playerChoice}`;
      comp1.innerHTML = `${computerChoice1}`;
      runs1.innerHTML = `${computerScore}`;
      st.innerHTML = 'Congratulations You Won' + " Make sure to reset";
      setTimeout(function() {
        button.disabled = true;
      }, 2000);
      setTimeout(reset, 2000);
    } else {
      balls1.innerHTML = `${ball1}`;
      user1.innerHTML = `${playerChoice}`;
      comp1.innerHTML = `${computerChoice1}`;
      runs1.innerHTML = `${computerScore}`;
      st.innerHTML = "Bot won Make sure to reset";
      batChange = 1;
      setTimeout(function() {
        button.disabled = true;
      }, 2000);
      setTimeout(reset, 2000);
    }
  } else {
    computerScore += computerChoice1;
    ball1 += 1;
    balls1.innerHTML = `${ball1}`;
    user1.innerHTML = `${playerChoice}`;
    comp1.innerHTML = `${computerChoice1}`;
    runs1.innerHTML = `${computerScore}`;
    st.innerHTML = "You are Bowling";
  }
}

function reset() {
  ball = 0;
  batChange = 1;
  ball1 = -1;
  playerScore = 0;
  target1 = 0;
  computerScore = 0;
  user.innerHTML = "0";
  comp.innerHTML = "0";
  runs.innerHTML = "0";
  balls.innerHTML = "0";
  target.innerHTML = "0";
  user1.innerHTML = "0";
  comp1.innerHTML = "0";
  runs1.innerHTML = "0";
  balls1.innerHTML = "0";
  target.innerHTML = "0";
  isFirstTurn = true;
  st.innerHTML = "You are Batting";
  let storedHighScore = localStorage.getItem('highScore');
  if (storedHighScore !== null) {
    Score.innerHTML = storedHighScore;
  }
}

function highScore() {
  let currentHighScore = parseInt(localStorage.getItem('highScore') || '0', 10);
  if (playerScore > currentHighScore) {
    localStorage.setItem('highScore', playerScore);
    Score.innerHTML = playerScore;
  }
}
