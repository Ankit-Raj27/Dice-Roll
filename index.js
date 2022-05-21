let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomeImageSource1 = "images/" + randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src", randomeImageSource1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomeImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);

// if(randomNumber1>randomNumber2)
// {
//     document.querySelector("h1").innerHTML= "Player 1 Wins!"
// }
// else if(randomNumber2>randomNumber1)
// {
//     document.querySelector("h1").innerHTML="Player 2 Wins!"
// }
// else{
//     document.querySelector("h1").innerHTML="Draw! Roll Again"
// }
document.querySelector('h1').innerHTML="Player 1's turn!";
function togg()
{
    
    let text = document.querySelector("h1").innerHTML;
    // if(text.innerHTML==="Player 1's turn!")
    // {
    //     text.innerHTML = "Player 2's turn!";
    // }

    document.querySelector("h1").innerHTML = text == "Player 1's turn!" ? "Player 2's turn!" : "Player 1's turn!";
    // else
    // {
    //     text.innerHTML="Player 1's turn!";
    // }
}
