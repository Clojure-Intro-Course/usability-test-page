//WELCOME TO THE JUNGLE

//Arrays used by functions when determining language
level0Qs = ["0-1", "0-2", "0-3", "0-4"];
level1Qs = ["1-1", "1-2", "1-3", "1-4"];
level2Qs = ["2-1", "2-2", "2-3", "2-4"];
level3Qs = ["3-1", "3-2", "3-3", "3-4"];

//All funtions in here run on page load
window.onload = function(){
  // Sets Math.random to an ARC4-based PRNG that is autoseeded using the
  // current time, dom state, and other accumulated local entropy.
  // The generated seed string is returned
  var temprng = new Math.seedrandom();
  //Generates a strong random seed, and sets the generator seed to that.
  seed.value = temprng.int32();
  seedSubmit();
  hideClojure();
  hideRacket();
  hideWinnerImage();
  hideMoveOnToClojure();
  hideFinished();
}

//Logs seed data in console and posts seed on web page with error message type
function seedSubmit() {
  currentSeed=seed.value
  rng = new Math.seedrandom(seed.value);
  console.log(rng());
  //Generates string for use in html on second line of page
  document.getElementById('currentSeed').innerHTML = "Current Seed: "
    + currentSeed + "  -  " + generateErrorMsgType();
  console.log("Current Seed: " + currentSeed);
}

//Adds all digits of the next rng value and calls helper fn on the sum
function generateErrorMsgType() {
  var value = rng();
  numStr = value.toString();
  lastChar = numStr.slice(-1);
  lastNum = Number(lastChar);
  return chooseMessage(lastChar);
}

//Returns error message message based on whether a number is even/odd
function chooseMessage(num) {
  if ((num % 2) == 1){
    return "Standard Error Messages"
  }
  else{
    return "Modified Error Messages"
  }
}

//Determines which questions to hide, logs them,
//and maps the hiding fn to the arrays of questions
function determineHideElems() {
  console.log("Hello, cupcake!");
  window.alert(parseInt(currentSeed));
  alternateLanguages(shuffle(level0Qs));
  alternateLanguages(shuffle(level1Qs));
  alternateLanguages(shuffle(level2Qs));
  alternateLanguages(shuffle(level3Qs));
  console.log(level0Qs);
  console.log(level1Qs);
  console.log(level2Qs);
  console.log(level3Qs);
  level0Qs.map(hideById);
  level1Qs.map(hideById);
  level2Qs.map(hideById);
  level3Qs.map(hideById);
  hideClojure();
}

//Takes an array and shuffles the order of the elements
function shuffle(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

//Takes shuffled array and alternates languages and logs result
function alternateLanguages(arr) {
  for (i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (i % 2 == 0) {
      arr[i] = arr[i] + " Clojure"
      console.log(arr[i]);
    } else {
      arr[i] = arr[i] + " Racket"
      console.log(arr[i]);
    }
  }
}

//Takes elements to hide and changes div style.display to "none"
function hideById(ele) {
  //console.log(ele);
  document.getElementById(ele).style.display = "none";
  showRacket();
}

//shows winner image when called
function showWinnerImage() {
  document.getElementById("winner image").style.display = "inline";
  console.log("game over, man. game over.")
}

//hides winner image when called
function hideWinnerImage() {
  document.getElementById("winner image").style.display = "none";
  console.log("game on")
}

//shows all racket divs
function showRacket() {
  document.getElementById("Racket Questions").style.display = "block";
  document.getElementById("hide racket button").style.display = "block";
  document.getElementById("show racket button").style.display = "none";
}

//hides all racket divs
function hideRacket() {
  document.getElementById("Racket Questions").style.display = "none";
  document.getElementById("show racket button").style.display = "block";
  document.getElementById("hide racket button").style.display = "none";
}

//shows all clojure divs
function showClojure() {
  document.getElementById("Clojure Questions").style.display = "block";
  document.getElementById("hide clojure button").style.display = "block";
  document.getElementById("show clojure button").style.display = "none";
}

//hides all clojure divs
function hideClojure() {
  document.getElementById("Clojure Questions").style.display = "none";
  document.getElementById("show clojure button").style.display = "block";
  document.getElementById("hide clojure button").style.display = "none";
}

//hides move on the clojure button (on page load)
function hideMoveOnToClojure() {
  document.getElementById("move on to clojure button").style.display = "none";
}

//shows move on the clojure button
function showMoveOnToClojure() {
  document.getElementById("move on to clojure button").style.display = "block";
}

//hides finished button (on page load)
function hideFinished() {
  document.getElementById("finished button").style.display = "none";
}

//shows finished button
function showFinished() {
  document.getElementById("finished button").style.display = "block";
}

//clears checkboxes
function clearCheckboxes() {
  document.getElementById("0-1 Racket check").checked = false;
  document.getElementById("0-2 Racket check").checked = false;
  document.getElementById("0-3 Racket check").checked = false;
  document.getElementById("0-4 Racket check").checked = false;

  document.getElementById("1-1 Racket check").checked = false;
  document.getElementById("1-2 Racket check").checked = false;
  document.getElementById("1-3 Racket check").checked = false;
  document.getElementById("1-4 Racket check").checked = false;

  document.getElementById("2-1 Racket check").checked = false;
  document.getElementById("2-2 Racket check").checked = false;
  document.getElementById("2-3 Racket check").checked = false;
  document.getElementById("2-4 Racket check").checked = false;

  document.getElementById("3-1 Racket check").checked = false;
  document.getElementById("3-2 Racket check").checked = false;
  document.getElementById("3-3 Racket check").checked = false;
  document.getElementById("3-4 Racket check").checked = false;

  document.getElementById("0-1 Clojure check").checked = false;
  document.getElementById("0-2 Clojure check").checked = false;
  document.getElementById("0-3 Clojure check").checked = false;
  document.getElementById("0-4 Clojure check").checked = false;Clojure
  document.getElementById("1-4 Clojure check").checked = false;

  document.getElementById("2-1 Clojure check").checked = false;
  document.getElementById("2-2 Clojure check").checked = false;
  document.getElementById("2-3 Clojure check").checked = false;
  document.getElementById("2-4 Clojure check").checked = false;

  document.getElementById("3-1 Clojure check").checked = false;
  document.getElementById("3-2 Clojure check").checked = false;
  document.getElementById("3-3 Clojure check").checked = false;
  document.getElementById("3-4 Clojure check").checked = false;
}

//overly complicated method of using checkboxes to hide/show elements
var racket0Counter = 0;
var racket0_1Counter = 0;
var racket0_2Counter = 0;
var racket0_3Counter = 0;
var racket0_4Counter = 0;

var racket1Counter = 0;
var racket1_1Counter = 0;
var racket1_2Counter = 0;
var racket1_3Counter = 0;
var racket1_4Counter = 0;

var racket2Counter = 0;
var racket2_1Counter = 0;
var racket2_2Counter = 0;
var racket2_3Counter = 0;
var racket2_4Counter = 0;

var racket3Counter = 0;
var racket3_1Counter = 0;
var racket3_2Counter = 0;
var racket3_3Counter = 0;
var racket3_4Counter = 0;

var racketCounter = 0;

//updates racket counter if counter 1-4 are changed
//shows button if all 8 checkboxes are clicked
function updateRacketCounter() {
  racketCounter = racket0Counter +
  racket1Counter +
  racket2Counter +
  racket3Counter;
  if (racketCounter == 8) {
    showMoveOnToClojure();
  }
}

function doneWRacket0_1() {
  if (racket0_1Counter == 1){
    if ((racket0_2Counter ==0) || (racket0_3Counter ==0) || (racket0_4Counter ==0)) {
      racket0Counter = 0
    }
    if ((((racket0_2Counter == 1) || (racket0_3Counter == 1)) && ((racket0_2Counter == 1) && !(racket0_3Counter == 1))) && !(racket0_4Counter == 1)) {
      racket0Counter = 1
    }
    else {
      racket0Counter = 0;
    }
    racket0_1Counter = 0;
  }
  else {
    if ((racket0_2Counter ==0) && (racket0_3Counter ==0) && (racket0_4Counter ==0)) {
      racket0Counter = 1
    }
    else racket0Counter = 2;
    racket0_1Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket0_2() {
  if (racket0_2Counter == 1){
    if ((racket0_1Counter ==0) || (racket0_3Counter ==0) || (racket0_4Counter ==0)) {
      racket0Counter = 0
    }
    if ((((racket0_1Counter == 1) || (racket0_3Counter == 1)) && ((racket0_1Counter == 1) && !(racket0_3Counter == 1))) && !(racket0_4Counter == 1)) {
      racket0Counter = 1
    }
    else {
      racket0Counter = 0;
    }
    racket0_2Counter = 0;
  }
  else {
    if ((racket0_1Counter ==0) && (racket0_3Counter ==0) && (racket0_4Counter ==0)) {
      racket0Counter = 1
    }
    else racket0Counter = 2;
    racket0_2Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket0_3() {
  if (racket0_3Counter == 1){
    if ((racket0_1Counter ==0) || (racket0_2Counter ==0) || (racket0_4Counter ==0)) {
      racket0Counter = 0
    }
    if ((((racket0_2Counter == 1) || (racket0_1Counter == 1)) && ((racket0_2Counter == 1) && !(racket0_1Counter == 1))) && !(racket0_4Counter == 1)) {
      racket0Counter = 1
    }
    else {
      racket0Counter = 0;
    }
    racket0_3Counter = 0;
  }
  else {
    if ((racket0_1Counter ==0) && (racket0_2Counter ==0) && (racket0_4Counter ==0)) {
      racket0Counter = 1
    }
    else racket0Counter = 2;
    racket0_3Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket0_4() {
  if (racket0_4Counter == 1){
    if ((racket0_1Counter ==0) || (racket0_2Counter ==0) || (racket0_3Counter ==0)) {
      racket0Counter = 0
    }
    if ((((racket0_2Counter == 1) || (racket0_3Counter == 1)) && ((racket0_2Counter == 1) && !(racket0_3Counter == 1))) && !(racket0_1Counter == 1)) {
      racket0Counter = 1
    }
    else {
      racket0Counter = 0;
    }
    racket0_4Counter = 0;
  }
  else {
    if ((racket0_1Counter ==0) && (racket0_2Counter ==0) && (racket0_3Counter ==0)) {
      racket0Counter = 1
    }
    else racket0Counter = 2;
    racket0_4Counter = 1;
  }
  updateRacketCounter();
}


function doneWRacket1_1() {
  if (racket1_1Counter == 1){
    if ((racket1_2Counter ==0) || (racket1_3Counter ==0) || (racket1_4Counter ==0)) {
      racket1Counter = 0
    }
    if ((((racket1_2Counter == 1) || (racket1_3Counter == 1)) && ((racket1_2Counter == 1) && !(racket1_3Counter == 1))) && !(racket1_4Counter == 1)) {
      racket1Counter = 1
    }
    else {
      racket1Counter = 0;
    }
    racket1_1Counter = 0;
  }
  else {
    if ((racket1_2Counter ==0) && (racket1_3Counter ==0) && (racket1_4Counter ==0)) {
      racket1Counter = 1
    }
    else racket1Counter = 2;
    racket1_1Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket1_2() {
  if (racket1_2Counter == 1){
    if ((racket1_1Counter ==0) || (racket1_3Counter ==0) || (racket1_4Counter ==0)) {
      racket1Counter = 0
    }
    if ((((racket1_1Counter == 1) || (racket1_3Counter == 1)) && ((racket1_2Counter == 1) && !(racket1_3Counter == 1))) && !(racket1_4Counter == 1)) {
      racket1Counter = 1
    }
    else {
      racket1Counter = 0;
    }
    racket1_2Counter = 0;
  }
  else {
    if ((racket1_1Counter ==0) && (racket1_3Counter ==0) && (racket1_4Counter ==0)) {
      racket1Counter = 1
    }
    else racket1Counter = 2;
    racket1_2Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket1_3() {
  if (racket1_3Counter == 1){
    if ((racket1_1Counter ==0) || (racket1_2Counter ==0) || (racket1_4Counter ==0)) {
      racket1Counter = 0
    }
    if ((((racket1_2Counter == 1) || (racket1_1Counter == 1)) && ((racket1_2Counter == 1) && !(racket1_1Counter == 1))) && !(racket1_4Counter == 1)) {
      racket1Counter = 1
    }
    else {
      racket1Counter = 0;
    }
    racket1_3Counter = 0;
  }
  else {
    if ((racket1_1Counter ==0) && (racket1_2Counter ==0) && (racket1_4Counter ==0)) {
      racket1Counter = 1
    }
    else racket1Counter = 2;
    racket1_3Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket1_4() {
  if (racket1_4Counter == 1){
    if ((racket1_1Counter ==0) || (racket1_2Counter ==0) || (racket1_3Counter ==0)) {
      racket1Counter = 0
    }
    if ((((racket1_2Counter == 1) || (racket1_3Counter == 1)) && ((racket1_2Counter == 1) && !(racket1_3Counter == 1))) && !(racket1_1Counter == 1)) {
      racket1Counter = 1
    }
    else {
      racket1Counter = 0;
    }
    racket1_4Counter = 0;
  }
  else {
    if ((racket1_1Counter ==0) && (racket1_2Counter ==0) && (racket1_3Counter ==0)) {
      racket1Counter = 1
    }
    else racket1Counter = 2;
    racket1_4Counter = 1;
  }
  updateRacketCounter();
}


function doneWRacket2_1() {
  if (racket2_1Counter == 1){
    if ((racket2_2Counter ==0) || (racket2_3Counter ==0) || (racket2_4Counter ==0)) {
      racket2Counter = 0
    }
    if ((((racket2_2Counter == 1) || (racket2_3Counter == 1)) && ((racket2_2Counter == 1) && !(racket2_3Counter == 1))) && !(racket2_4Counter == 1)) {
      racket2Counter = 1
    }
    else {
      racket2Counter = 0;
    }
    racket2_1Counter = 0;
  }
  else {
    if ((racket2_2Counter ==0) && (racket2_3Counter ==0) && (racket2_4Counter ==0)) {
      racket2Counter = 1
    }
    else racket2Counter = 2;
    racket2_1Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket2_2() {
  if (racket2_2Counter == 1){
    if ((racket2_1Counter ==0) || (racket2_3Counter ==0) || (racket2_4Counter ==0)) {
      racket2Counter = 0
    }
    if ((((racket2_1Counter == 1) || (racket2_3Counter == 1)) && ((racket2_1Counter == 1) && !(racket2_3Counter == 1))) && !(racket2_4Counter == 1)) {
      racket2Counter = 1
    }
    else {
      racket2Counter = 0;
    }
    racket2_2Counter = 0;
  }
  else {
    if ((racket2_1Counter ==0) && (racket2_3Counter ==0) && (racket2_4Counter ==0)) {
      racket2Counter = 1
    }
    else racket2Counter = 2;
    racket2_2Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket2_3() {
  if (racket2_3Counter == 1){
    if ((racket2_1Counter ==0) || (racket2_2Counter ==0) || (racket2_4Counter ==0)) {
      racket2Counter = 0
    }
    if ((((racket2_2Counter == 1) || (racket2_1Counter == 1)) && ((racket2_2Counter == 1) && !(racket2_1Counter == 1))) && !(racket2_4Counter == 1)) {
      racket2Counter = 1
    }
    else {
      racket2Counter = 0;
    }
    racket2_3Counter = 0;
  }
  else {
    if ((racket2_1Counter ==0) && (racket2_2Counter ==0) && (racket2_4Counter ==0)) {
      racket2Counter = 1
    }
    else racket2Counter = 2;
    racket2_3Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket2_4() {
  if (racket2_4Counter == 1){
    if ((racket2_1Counter ==0) || (racket2_2Counter ==0) || (racket2_3Counter ==0)) {
      racket2Counter = 0
    }
    if ((((racket2_2Counter == 1) || (racket2_3Counter == 1)) && ((racket2_2Counter == 1) && !(racket2_3Counter == 1))) && !(racket2_1Counter == 1)) {
      racket2Counter = 1
    }
    else {
      racket2Counter = 0;
    }
    racket2_4Counter = 0;
  }
  else {
    if ((racket2_1Counter ==0) && (racket2_2Counter ==0) && (racket2_3Counter ==0)) {
      racket2Counter = 1
    }
    else racket2Counter = 2;
    racket2_4Counter = 1;
  }
  updateRacketCounter();
}


function doneWRacket3_1() {
  if (racket3_1Counter == 1){
    if ((racket3_2Counter ==0) || (racket3_3Counter ==0) || (racket3_4Counter ==0)) {
      racket3Counter = 0
    }
    if ((((racket3_2Counter == 1) || (racket3_3Counter == 1)) && ((racket3_2Counter == 1) && !(racket3_3Counter == 1))) && !(racket3_4Counter == 1)) {
      racket3Counter = 1
    }
    else {
      racket3Counter = 0;
    }
    racket3_1Counter = 0;
  }
  else {
    if ((racket3_2Counter ==0) && (racket3_3Counter ==0) && (racket3_4Counter ==0)) {
      racket3Counter = 1
    }
    else racket3Counter = 2;
    racket3_1Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket3_2() {
  if (racket3_2Counter == 1){
    if ((racket3_1Counter ==0) || (racket3_3Counter ==0) || (racket3_4Counter ==0)) {
      racket3Counter = 0
    }
    if ((((racket3_1Counter == 1) || (racket3_3Counter == 1)) && ((racket3_1Counter == 1) && !(racket3_3Counter == 1))) && !(racket3_4Counter == 1)) {
      racket3Counter = 1
    }
    else {
      racket3Counter = 0;
    }
    racket3_2Counter = 0;
  }
  else {
    if ((racket3_1Counter ==0) && (racket3_3Counter ==0) && (racket3_4Counter ==0)) {
      racket3Counter = 1
    }
    else racket3Counter = 2;
    racket3_2Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket3_3() {
  if (racket3_3Counter == 1){
    if ((racket3_1Counter ==0) || (racket3_2Counter ==0) || (racket3_4Counter ==0)) {
      racket3Counter = 0
    }
    if ((((racket3_2Counter == 1) || (racket3_1Counter == 1)) && ((racket3_2Counter == 1) && !(racket3_1Counter == 1))) && !(racket3_4Counter == 1)) {
      racket3Counter = 1
    }
    else {
      racket3Counter = 0;
    }
    racket3_3Counter = 0;
  }
  else {
    if ((racket3_1Counter ==0) && (racket3_2Counter ==0) && (racket3_4Counter ==0)) {
      racket3Counter = 1
    }
    else racket3Counter = 2;
    racket3_3Counter = 1;
  }
  updateRacketCounter();
}

function doneWRacket3_4() {
  if (racket3_4Counter == 1){
    if ((racket3_1Counter ==0) || (racket3_2Counter ==0) || (racket3_3Counter ==0)) {
      racket3Counter = 0
    }
    if ((((racket3_2Counter == 1) || (racket3_3Counter == 1)) && ((racket3_2Counter == 1) && !(racket3_3Counter == 1))) && !(racket3_1Counter == 1)) {
      racket3Counter = 1
    }
    else {
      racket3Counter = 0;
    }
    racket3_4Counter = 0;
  }
  else {
    if ((racket3_1Counter ==0) && (racket3_2Counter ==0) && (racket3_3Counter ==0)) {
      racket3Counter = 1
    }
    else racket3Counter = 2;
    racket3_4Counter = 1;
  }
  updateRacketCounter();
}


var clojure0Counter = 0;
var clojure0_1Counter = 0;
var clojure0_2Counter = 0;
var clojure0_3Counter = 0;
var clojure0_4Counter = 0;

var clojure1Counter = 0;
var clojure1_1Counter = 0;
var clojure1_2Counter = 0;
var clojure1_3Counter = 0;
var clojure1_4Counter = 0;

var clojure2Counter = 0;
var clojure2_1Counter = 0;
var clojure2_2Counter = 0;
var clojure2_3Counter = 0;
var clojure2_4Counter = 0;

var clojure3Counter = 0;
var clojure3_1Counter = 0;
var clojure3_2Counter = 0;
var clojure3_3Counter = 0;
var clojure3_4Counter = 0;

var clojureCounter = 0;


function updateClojureCounter() {
  clojureCounter = clojure0Counter +
  clojure1Counter +
  clojure2Counter +
  clojure3Counter;
  if (clojureCounter == 8) {
    showFinished();
  }
}

function doneWClojure0_1() {
  if (clojure0_1Counter == 1){
    if ((clojure0_2Counter ==0) || (clojure0_3Counter ==0) || (clojure0_4Counter ==0)) {
      clojure0Counter = 0
    }
    if ((((clojure0_2Counter == 1) || (clojure0_3Counter == 1)) && ((clojure0_2Counter == 1) && !(clojure0_3Counter == 1))) && !(clojure0_4Counter == 1)) {
      clojure0Counter = 1
    }
    else {
      clojure0Counter = 0;
    }
    clojure0_1Counter = 0;
  }
  else {
    if ((clojure0_2Counter ==0) && (clojure0_3Counter ==0) && (clojure0_4Counter ==0)) {
      clojure0Counter = 1
    }
    else clojure0Counter = 2;
    clojure0_1Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure0_2() {
  if (clojure0_2Counter == 1){
    if ((clojure0_1Counter ==0) || (clojure0_3Counter ==0) || (clojure0_4Counter ==0)) {
      clojure0Counter = 0
    }
    if ((((clojure0_1Counter == 1) || (clojure0_3Counter == 1)) && ((clojure0_1Counter == 1) && !(clojure0_3Counter == 1))) && !(clojure0_4Counter == 1)) {
      clojure0Counter = 1
    }
    else {
      clojure0Counter = 0;
    }
    clojure0_2Counter = 0;
  }
  else {
    if ((clojure0_1Counter ==0) && (clojure0_3Counter ==0) && (clojure0_4Counter ==0)) {
      clojure0Counter = 1
    }
    else clojure0Counter = 2;
    clojure0_2Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure0_3() {
  if (clojure0_3Counter == 1){
    if ((clojure0_1Counter ==0) || (clojure0_2Counter ==0) || (clojure0_4Counter ==0)) {
      clojure0Counter = 0
    }
    if ((((clojure0_2Counter == 1) || (clojure0_1Counter == 1)) && ((clojure0_2Counter == 1) && !(clojure0_1Counter == 1))) && !(clojure0_4Counter == 1)) {
      clojure0Counter = 1
    }
    else {
      clojure0Counter = 0;
    }
    clojure0_3Counter = 0;
  }
  else {
    if ((clojure0_1Counter ==0) && (clojure0_2Counter ==0) && (clojure0_4Counter ==0)) {
      clojure0Counter = 1
    }
    else clojure0Counter = 2;
    clojure0_3Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure0_4() {
  if (clojure0_4Counter == 1){
    if ((clojure0_1Counter ==0) || (clojure0_2Counter ==0) || (clojure0_3Counter ==0)) {
      clojure0Counter = 0
    }
    if ((((clojure0_2Counter == 1) || (clojure0_3Counter == 1)) && ((clojure0_2Counter == 1) && !(clojure0_3Counter == 1))) && !(clojure0_1Counter == 1)) {
      clojure0Counter = 1
    }
    else {
      clojure0Counter = 0;
    }
    clojure0_4Counter = 0;
  }
  else {
    if ((clojure0_1Counter ==0) && (clojure0_2Counter ==0) && (clojure0_3Counter ==0)) {
      clojure0Counter = 1
    }
    else clojure0Counter = 2;
    clojure0_4Counter = 1;
  }
  updateClojureCounter();
}


function doneWClojure1_1() {
  if (clojure1_1Counter == 1){
    if ((clojure1_2Counter ==0) || (clojure1_3Counter ==0) || (clojure1_4Counter ==0)) {
      clojure1Counter = 0
    }
    if ((((clojure1_2Counter == 1) || (clojure1_3Counter == 1)) && ((clojure1_2Counter == 1) && !(clojure1_3Counter == 1))) && !(clojure1_4Counter == 1)) {
      clojure1Counter = 1
    }
    else {
      clojure1Counter = 0;
    }
    clojure1_1Counter = 0;
  }
  else {
    if ((clojure1_2Counter ==0) && (clojure1_3Counter ==0) && (clojure1_4Counter ==0)) {
      clojure1Counter = 1
    }
    else clojure1Counter = 2;
    clojure1_1Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure1_2() {
  if (clojure1_2Counter == 1){
    if ((clojure1_1Counter ==0) || (clojure1_3Counter ==0) || (clojure1_4Counter ==0)) {
      clojure1Counter = 0
    }
    if ((((clojure1_1Counter == 1) || (clojure1_3Counter == 1)) && ((clojure1_2Counter == 1) && !(clojure1_3Counter == 1))) && !(clojure1_4Counter == 1)) {
      clojure1Counter = 1
    }
    else {
      clojure1Counter = 0;
    }
    clojure1_2Counter = 0;
  }
  else {
    if ((clojure1_1Counter ==0) && (clojure1_3Counter ==0) && (clojure1_4Counter ==0)) {
      clojure1Counter = 1
    }
    else clojure1Counter = 2;
    clojure1_2Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure1_3() {
  if (clojure1_3Counter == 1){
    if ((clojure1_1Counter ==0) || (clojure1_2Counter ==0) || (clojure1_4Counter ==0)) {
      clojure1Counter = 0
    }
    if ((((clojure1_2Counter == 1) || (clojure1_1Counter == 1)) && ((clojure1_2Counter == 1) && !(clojure1_1Counter == 1))) && !(clojure1_4Counter == 1)) {
      clojure1Counter = 1
    }
    else {
      clojure1Counter = 0;
    }
    clojure1_3Counter = 0;
  }
  else {
    if ((clojure1_1Counter ==0) && (clojure1_2Counter ==0) && (clojure1_4Counter ==0)) {
      clojure1Counter = 1
    }
    else clojure1Counter = 2;
    clojure1_3Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure1_4() {
  if (clojure1_4Counter == 1){
    if ((clojure1_1Counter ==0) || (clojure1_2Counter ==0) || (clojure1_3Counter ==0)) {
      clojure1Counter = 0
    }
    if ((((clojure1_2Counter == 1) || (clojure1_3Counter == 1)) && ((clojure1_2Counter == 1) && !(clojure1_3Counter == 1))) && !(clojure1_1Counter == 1)) {
      clojure1Counter = 1
    }
    else {
      clojure1Counter = 0;
    }
    clojure1_4Counter = 0;
  }
  else {
    if ((clojure1_1Counter ==0) && (clojure1_2Counter ==0) && (clojure1_3Counter ==0)) {
      clojure1Counter = 1
    }
    else clojure1Counter = 2;
    clojure1_4Counter = 1;
  }
  updateClojureCounter();
}


function doneWClojure2_1() {
  if (clojure2_1Counter == 1){
    if ((clojure2_2Counter ==0) || (clojure2_3Counter ==0) || (clojure2_4Counter ==0)) {
      clojure2Counter = 0
    }
    if ((((clojure2_2Counter == 1) || (clojure2_3Counter == 1)) && ((clojure2_2Counter == 1) && !(clojure2_3Counter == 1))) && !(clojure2_4Counter == 1)) {
      clojure2Counter = 1
    }
    else {
      clojure2Counter = 0;
    }
    clojure2_1Counter = 0;
  }
  else {
    if ((clojure2_2Counter ==0) && (clojure2_3Counter ==0) && (clojure2_4Counter ==0)) {
      clojure2Counter = 1
    }
    else clojure2Counter = 2;
    clojure2_1Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure2_2() {
  if (clojure2_2Counter == 1){
    if ((clojure2_1Counter ==0) || (clojure2_3Counter ==0) || (clojure2_4Counter ==0)) {
      clojure2Counter = 0
    }
    if ((((clojure2_1Counter == 1) || (clojure2_3Counter == 1)) && ((clojure2_1Counter == 1) && !(clojure2_3Counter == 1))) && !(clojure2_4Counter == 1)) {
      clojure2Counter = 1
    }
    else {
      clojure2Counter = 0;
    }
    clojure2_2Counter = 0;
  }
  else {
    if ((clojure2_1Counter ==0) && (clojure2_3Counter ==0) && (clojure2_4Counter ==0)) {
      clojure2Counter = 1
    }
    else clojure2Counter = 2;
    clojure2_2Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure2_3() {
  if (clojure2_3Counter == 1){
    if ((clojure2_1Counter ==0) || (clojure2_2Counter ==0) || (clojure2_4Counter ==0)) {
      clojure2Counter = 0
    }
    if ((((clojure2_2Counter == 1) || (clojure2_1Counter == 1)) && ((clojure2_2Counter == 1) && !(clojure2_1Counter == 1))) && !(clojure2_4Counter == 1)) {
      clojure2Counter = 1
    }
    else {
      clojure2Counter = 0;
    }
    clojure2_3Counter = 0;
  }
  else {
    if ((clojure2_1Counter ==0) && (clojure2_2Counter ==0) && (clojure2_4Counter ==0)) {
      clojure2Counter = 1
    }
    else clojure2Counter = 2;
    clojure2_3Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure2_4() {
  if (clojure2_4Counter == 1){
    if ((clojure2_1Counter ==0) || (clojure2_2Counter ==0) || (clojure2_3Counter ==0)) {
      clojure2Counter = 0
    }
    if ((((clojure2_2Counter == 1) || (clojure2_3Counter == 1)) && ((clojure2_2Counter == 1) && !(clojure2_3Counter == 1))) && !(clojure2_1Counter == 1)) {
      clojure2Counter = 1
    }
    else {
      clojure2Counter = 0;
    }
    clojure2_4Counter = 0;
  }
  else {
    if ((clojure2_1Counter ==0) && (clojure2_2Counter ==0) && (clojure2_3Counter ==0)) {
      clojure2Counter = 1
    }
    else clojure2Counter = 2;
    clojure2_4Counter = 1;
  }
  updateClojureCounter();
}


function doneWClojure3_1() {
  if (clojure3_1Counter == 1){
    if ((clojure3_2Counter ==0) || (clojure3_3Counter ==0) || (clojure3_4Counter ==0)) {
      clojure3Counter = 0
    }
    if ((((clojure3_2Counter == 1) || (clojure3_3Counter == 1)) && ((clojure3_2Counter == 1) && !(clojure3_3Counter == 1))) && !(clojure3_4Counter == 1)) {
      clojure3Counter = 1
    }
    else {
      clojure3Counter = 0;
    }
    clojure3_1Counter = 0;
  }
  else {
    if ((clojure3_2Counter ==0) && (clojure3_3Counter ==0) && (clojure3_4Counter ==0)) {
      clojure3Counter = 1
    }
    else clojure3Counter = 2;
    clojure3_1Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure3_2() {
  if (clojure3_2Counter == 1){
    if ((clojure3_1Counter ==0) || (clojure3_3Counter ==0) || (clojure3_4Counter ==0)) {
      clojure3Counter = 0
    }
    if ((((clojure3_1Counter == 1) || (clojure3_3Counter == 1)) && ((clojure3_1Counter == 1) && !(clojure3_3Counter == 1))) && !(clojure3_4Counter == 1)) {
      clojure3Counter = 1
    }
    else {
      clojure3Counter = 0;
    }
    clojure3_2Counter = 0;
  }
  else {
    if ((clojure3_1Counter ==0) && (clojure3_3Counter ==0) && (clojure3_4Counter ==0)) {
      clojure3Counter = 1
    }
    else clojure3Counter = 2;
    clojure3_2Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure3_3() {
  if (clojure3_3Counter == 1){
    if ((clojure3_1Counter ==0) || (clojure3_2Counter ==0) || (clojure3_4Counter ==0)) {
      clojure3Counter = 0
    }
    if ((((clojure3_2Counter == 1) || (clojure3_1Counter == 1)) && ((clojure3_2Counter == 1) && !(clojure3_1Counter == 1))) && !(clojure3_4Counter == 1)) {
      clojure3Counter = 1
    }
    else {
      clojure3Counter = 0;
    }
    clojure3_3Counter = 0;
  }
  else {
    if ((clojure3_1Counter ==0) && (clojure3_2Counter ==0) && (clojure3_4Counter ==0)) {
      clojure3Counter = 1
    }
    else clojure3Counter = 2;
    clojure3_3Counter = 1;
  }
  updateClojureCounter();
}

function doneWClojure3_4() {
  if (clojure3_4Counter == 1){
    if ((clojure3_1Counter ==0) || (clojure3_2Counter ==0) || (clojure3_3Counter ==0)) {
      clojure3Counter = 0
    }
    if ((((clojure3_2Counter == 1) || (clojure3_3Counter == 1)) && ((clojure3_2Counter == 1) && !(clojure3_3Counter == 1))) && !(clojure3_1Counter == 1)) {
      clojure3Counter = 1
    }
    else {
      clojure3Counter = 0;
    }
    clojure3_4Counter = 0;
  }
  else {
    if ((clojure3_1Counter ==0) && (clojure3_2Counter ==0) && (clojure3_3Counter ==0)) {
      clojure3Counter = 1
    }
    else clojure3Counter = 2;
    clojure3_4Counter = 1;
  }
  updateClojureCounter();
}
