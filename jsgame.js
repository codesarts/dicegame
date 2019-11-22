
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;//images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];//choose the image on the left
image1.setAttribute("src", randomImageSource);//change the image

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);
//if player 1 win
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//if player 1 win
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//if draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
