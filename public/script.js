

var element1 = document.getElementById("redButton")
var element2 = document.getElementById("greenButton")
var element3 = document.getElementById("blueButton")
var element4 = document.getElementById("yellowButton")
var audio = new Audio('sheesh.mp3');
var gameCounter = 0;
var userCounter = 0;
var scoreCounter = 0;
var alive = false;
var userArray = new Array (100);
let answers = new Array(100);
var localColor = 0;

function test ()
{
    element1.classList.remove('redDerp');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function setAnswers() {
  for (let i = 0; i < 100; i++) {
    answers[i] = getRandomInt(1, 5);
  }
  alive = true;
}

function flashRed()
{
  element1.classList.remove('redDerp');
  element1.classList.add('redLight');
  setTimeout(function () {element1.classList.remove('redLight')}, 900);
  setTimeout(function () {element1.classList.add('redDerp')}, 900);
}

function flashGreen()
{
  element2.classList.remove('greenDerp');
  element2.classList.add('greenLight');
  setTimeout(function () {element2.classList.remove('greenLight')}, 900);
  setTimeout(function () {element2.classList.add('greenDerp')}, 900);
}
function flashBlue()
{
  element3.classList.remove('blueDerp');
  element3.classList.add('blueLight');
  setTimeout(function () {element3.classList.remove('blueLight')}, 900);
  setTimeout(function () {element3.classList.add('blueDerp')}, 900);
}
function flashYellow()
{
  element4.classList.remove('yellowDerp');
  element4.classList.add('yellowLight');
  setTimeout(function () {element4.classList.remove('yellowLight')}, 900);
  setTimeout(function () {element4.classList.add('yellowDerp')}, 900);
}

function showPattern () {
  gameCounter++;
  for (let i = 0; i < gameCounter; i++)
  {
      setTimeout(function () {flashColor(answers[i])}, 2000*(i+1));
  }
  let emptyArray = new Array(100);
  userArray = emptyArray;
  userCounter = 0;
}


function startGame() {
  if (alive == false)
  {
    setAnswers();
    showPattern();
  }
}

function adjustArray1 ()
{
  localColor = 1;
  if (alive == true && gameCounter != userCounter)
  {
      addPress();
      if (gameCounter == userCounter && arrayMatch() == false)
      {
        alive = false;
        audio.play();
        reset();
      }
      else if (gameCounter == userCounter && arrayMatch() == true)
      {
      scoreCounter++;
      showPattern();
      }
  }
}
function adjustArray2 ()
{
  localColor = 2;
  if (alive == true && gameCounter != userCounter)
  {
      addPress();
      if (gameCounter == userCounter && arrayMatch() == false)
      {
        alive = false;
        audio.play();
        reset();
      }
      else if (gameCounter == userCounter && arrayMatch() == true)
      {
      scoreCounter++;
      showPattern();
      }
  }
}

function adjustArray3 ()
{
  localColor = 3;
  if (alive == true && gameCounter != userCounter)
  {
      addPress();
      if (gameCounter == userCounter && arrayMatch() == false)
      {
        alive = false;
        audio.play();
        reset();
      }
    if (gameCounter == userCounter && arrayMatch() == true)
      {
      scoreCounter++;
      showPattern();
      }
  }

}

function adjustArray4 ()
{
  localColor = 4;
  if (alive == true && gameCounter != userCounter)
  {
      addPress();
      if (gameCounter == userCounter && arrayMatch() == false)
      {
        alive = false;
        audio.play();
        reset();
      }
      if (gameCounter == userCounter && arrayMatch() == true)
      {
      scoreCounter++;
      showPattern();
      }
  }

}


function addPress()
{
    flashColor(localColor);
    userArray[userCounter] = localColor;
    userCounter++;
}

function flashColor (flash)
{
  switch(flash)
  {
    case 1:
    flashRed();
    break;
    case 2:
    flashGreen();
    break;
    case 3:
    flashBlue();
    break;
    case 4:
    flashYellow();
    break;
  }
}

function arrayMatch()
{
  for (var i = 0; i < gameCounter; i++)
  {
    if (userArray[i] != answers[i])
    {
      return false;
    }
  }
  return true;
}

function reset()
{
  empty = new Array (100);
  answers = empty;
  userArray = empty;
  userCounter = 0;
  gameCounter = 0;
  alive = false;
  localColor = 0;
}

function showScore  ()
{
  var solver
  if (scoreCounter == 1)
  {
    solver = 1;
  }
  if (scoreCounter == 3)
  {
    solver = 2;
  }
  if (scoreCounter == 6)
  {
    solver = 3;
  }
  if (scoreCounter == 10)
  {
    solver = 4;
  }
  if (scoreCounter == 15)
  {
    solver = 5;
  }
  if (scoreCounter == 21)
  {
    solver = 6;
  }
  if (scoreCounter == 28)
  {
    solver = 7;
  }
  if (scoreCounter == 36)
  {
    solver = 8;
  }
  if (scoreCounter == 45)
  {
    solver = 9;
  }
  if (scoreCounter == 55)
  {
    solver = 10;
  }
  if (scoreCounter == 66)
  {
    solver = 11;
  }
  if (scoreCounter == 78)
  {
    solver = 12;
  }
  if (scoreCounter == 91)
  {
    solver = 13;
  }
  if (scoreCounter == 105)
  {
    solver = 14;
  }
  if (scoreCounter == 136)
  {
    solver = 15;
  }
  if (scoreCounter == 153)
  {
    solver = 16;
  }
  else
  {
    solver = 69;
  }
  alert(solver);
}

document.getElementById("starter").addEventListener("click", startGame);
document.getElementById("redButton").addEventListener("click", adjustArray1);
document.getElementById("blueButton").addEventListener("click", adjustArray3);
document.getElementById("yellowButton").addEventListener("click", adjustArray4);
document.getElementById("greenButton").addEventListener("click", adjustArray2);
document.getElementById("scoreBoard").addEventListener("click", showScore);
