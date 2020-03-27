var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc1 = "images/" + randomDiceImage1;
var randomImageSrc2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSrc1);
image2.setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[0].textContent = "🖐Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelectorAll("h1")[0].textContent = "Player 2 Wins!🖐";
} else document.querySelectorAll("h1")[0].textContent = "👏It's a Draw!👏";

function refreshPage() {
  window.location.reload();
}