

var element1 = document.getElementById("redButton")
var element2 = document.getElementById("greenButton")
var element3 = document.getElementById("blueButton")
var element4 = document.getElementById("yellowButton")
var counter = 0;
var alive = false;
let answers = new Array(100);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function setAnswers() {
  for (int i = 0; i < 100; i++) {
    answers[i] = getRandomInt(1, 5);
  }
}

function removeRedDerp()
{
  element1.classList.remove('redDerp');
}
function addRedDerp ()
{
  element1.classList.add('redDerp');
}
function addRedLight ()
{
  element1.classList.add('redLight');
}
function removeRedLight ()
{
  element1.classList.remove('redLight');
}
function removeGreenDerp()
{
  element1.classList.remove('greenDerp');
}
function addGreenDerp ()
{
  element1.classList.add('greenDerp');
}
function addGreenLight ()
{
  element1.classList.add('greenLight');
}
function removeGreenLight ()
{
  element1.classList.remove('greenLight');
}
function removeBlueDerp()
{
  element1.classList.remove('blueDerp');
}
function addBlueDerp ()
{
  element1.classList.add('blueDerp');
}
function addBlueLight ()
{
  element1.classList.add('blueLight');
}

function removeYellowLight ()
{
  element1.classList.remove('yellowLight');
}
function removeYellowDerp()
{
  element1.classList.remove('yellowDerp');
}
function addYellowDerp ()
{
  element1.classList.add('yellowDerp');
}
function addYellowLight ()
{
  element1.classList.add('yellowLight');
}

function removeRedLight ()
{
  element1.classList.remove('redLight');
}

function showPattern ()
{
  counter++;
  for (int i = 0; i < counter; i++)
  {
    if (answers[i] == 1)
    {
      removeRedDerp();
      setTimeout(addRedLight (), 1000);
      setTimeout(removeRedLight(), 1500);
      setTimeout(addRedDerp (), 2000);
    }
    else if (answers[i] == 2)
    {
      removeGreenDerp();
      setTimeout(addGreenLight (), 1000);
      setTimeout(removeGreenLight (), 1500);
      setTimeout(addGreenDerp (), 2000)
    }
    else if (answers[i] == 3)
    {
      removeBlueDerp();
      setTimeout(addBlueLight (), 1000);
      setTimeout(removeBlueLight (), 1500);
      setTimeout(addBlueDerp (), 2000)
    }
    else if (answers[i] == 4)
    {
      removeYellowDerp();
      setTimeout(addYellowLight (), 1000);
      setTimeout(removeYellowLight (), 1500);
      setTimeout(addYellowDerp (), 2000)
    }
  }
}

function playGame() {

  setAnswers();
  showPattern();
}
