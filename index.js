function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomDiceImage1 = "dice" + randomNumber1 + ".png";
  let randomeImageSource1 = "images/" + randomDiceImage1;

  document.querySelectorAll("img")[0].setAttribute("src", randomeImageSource1);

  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  let randomDiceImage2 = "dice" + randomNumber2 + ".png";
  let randomeImageSource2 = "images/" + randomDiceImage2;

  document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);
}

document.querySelector("h1").innerHTML = "Player 1's turn!";

function togglePlayer()
{
    if(document.querySelector("h1").innerHTML === "Player 1's turn!")
    {
        document.querySelector("h1").innerHTML = "Player 2's turn!";
    }

    else
    {
        document.querySelector("h1").innerHTML = "Player 1's turn!";
    }
    rollDice();
}
