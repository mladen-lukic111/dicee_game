var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

var firstImagePath = "images/dice" + randomNumber1 + ".png";
var secondImagePath = "images/dice" + randomNumber2 + ".png";

document.querySelector('.img1').setAttribute('src', firstImagePath);
document.querySelector('.img2').setAttribute('src', secondImagePath);

if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player1 Wins!";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player2 Wins!";
} else {
    document.querySelector('h1').innerHTML = "Draw!";
}