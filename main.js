var choice = 0;
var wins = 0;
var losses = 0;
var draws = 0;


function rock() {
    choice = 1;
    randomNumber = (Math.random() * 3) + 1;
    randomNumber = Math.floor(randomNumber);    
    if (randomNumber === 1){
        let newImage = "images/n_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "It's a draw! I picked rock too";
        draws = draws + 1;
        document.querySelector(".draws").innerHTML = "Draws = " + draws;
    }
    else if (randomNumber === 2){
        let newImage = "images/h_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You lose! I picked paper!";
        losses = losses + 1;
        document.querySelector(".losses").innerHTML = "Losses = " + losses;

    }
    else {
        let newImage = "images/s_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You win! I picked scissors =(";
        wins = wins + 1;
        document.querySelector(".wins").innerHTML = "Wins = " + wins;

    }

}
function paper() {
    choice = 2;
    randomNumber = (Math.random() * 3) + 1;
    randomNumber = Math.floor(randomNumber);

    if (randomNumber === 1){
        let newImage = "images/s_computer.png";
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You win! I picked rock =(";
        wins = wins + 1;
        document.querySelector(".wins").innerHTML = "Wins = " + wins;
    }
    else if (randomNumber === 2){
        let newImage = "images/n_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "It's a draw! I picked paper too";
        draws = draws + 1;
        document.querySelector(".draws").innerHTML = "Draws = " + draws;

    }
    else {
        let newImage = "images/h_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You lose! I picked scissors!";
        losses = losses + 1;
        document.querySelector(".losses").innerHTML = "Losses = " + losses;

    }
}
function scissors() {
    choice = 3;
    randomNumber = (Math.random() * 3) + 1;
    randomNumber = Math.floor(randomNumber);

    if (randomNumber === 1){
        let newImage = "images/h_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You lose! I picked rock";
        losses = losses + 1;
        document.querySelector(".losses").innerHTML = "Losses = " + losses;
    }
    else if (randomNumber === 2){
        let newImage = "images/s_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "You win! I picked paper =(";
        wins = wins + 1;
        document.querySelector(".wins").innerHTML = "Wins = " + wins;

    }
    else {
        let newImage = "images/n_computer.png"; 
        document.querySelector("img").setAttribute("src",newImage);
        document.querySelector("h1").innerHTML = "It's a draw! I picked scissors too";
        draws = draws + 1;
        document.querySelector(".draws").innerHTML = "Draws = " + draws;

    }

}

function restart(){
    document.querySelector("img").setAttribute("src", "images/n_computer.png");
    document.querySelector("h1").innerHTML = "I dare you to beat me!";
    document.querySelector(".draws").innerHTML = "Draws = 0"
    document.querySelector(".wins").innerHTML = "Wins = 0"
    document.querySelector(".losses").innerHTML = "Losses = 0"
    wins = 0;
    losses = 0;
    draws = 0;

}

