let buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonDiv");
document.body.appendChild(buttonDiv);

let button1 = document.createElement("button");
button1.classList.add("rock-button");
button1.classList.add("buttons");
let button2 = document.createElement("button");
button2.classList.add("paper-button");
button2.classList.add("buttons");
let button3 = document.createElement("button");
button3.classList.add("scissors-button");
button3.classList.add("buttons");

let playerDiv = document.createElement("div");
playerDiv.classList.add("playerDiv");
document.body.appendChild(playerDiv);

let playerButton = document.createElement("button");
playerButton.textContent = "play";
playerButton.classList.add("player-button");
playerButton.disabled = true;

buttonDiv.appendChild(button1);
buttonDiv.appendChild(button2);
buttonDiv.appendChild(button3);
playerDiv.appendChild(playerButton);

const imgbutton1 = new Image(); 
imgbutton1.src = "images/the-rock.jpg"; 
imgbutton1.alt = "The Rock"; 
imgbutton1.classList.add("rps-image");
button1.appendChild(imgbutton1); 

const imgbutton2 = new Image(); 
imgbutton2.src = "images/map-paper.jpg"; 
imgbutton2.alt = "the map from Dora"; 
imgbutton2.classList.add("rps-image");
button2.appendChild(imgbutton2); 

const imgbutton3 = new Image(); 
imgbutton3.src = "images/edward-scissors.jpg"; 
imgbutton3.alt = "Edward Scissorhands"; 
imgbutton3.classList.add("rps-image");
button3.appendChild(imgbutton3); 

let choice = "";

button1.addEventListener("click", (event) => {
    console.log("you chose rock");
    choice = "rock";
    playerButton.disabled = false;
})

button2.addEventListener("click", (event) => {
    console.log("you chose paper");
    choice = "paper";
    playerButton.disabled = false;
})

button3.addEventListener("click", (event) => {
    console.log("you chose scissors");
    choice = "scissors";
    playerButton.disabled = false;
})

let message = document.createElement("p");
message.classList.add("message");

let playAgain = document.createElement("button");

function playerButtonCreation() {
    let playagainDiv = document.createElement("div");
    playagainDiv.classList.add("playagainDiv");
    document.body.appendChild(playagainDiv);

    playAgain.classList.add("playagain-button");
    playAgain.textContent = "play again";
    playagainDiv.appendChild(playAgain);
}

playerButton.addEventListener("click", (event) => {
    const rps = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * rps.length);
    console.log(random, rps[random]);

    document.body.appendChild(message);

    if(rps[random] === choice) {
        console.log("It's a tie!");
        message.removeAttribute("class");
        message.classList.add("message");
        message.classList.add("tie");
        message.textContent = `You chose ${choice} and the computer chose ${rps[random]}. It's a tie!`;
        playerButton.disabled = true;
    } else if (rps[random] == "rock" && choice == "paper" 
        || rps[random] == "paper" && choice == "scissors" 
        || rps[random] == "scissors" && choice == "rock") {
        console.log("You win!");
        message.removeAttribute("class");
        message.classList.add("message");
        message.classList.add("win");
        message.textContent = `You chose ${choice} and the computer chose ${rps[random]}.You win!`;
        playerButton.disabled = true;
    } else if (rps[random] == "rock" && choice == "scissors" 
        || rps[random] == "paper" && choice == "rock" 
        || rps[random] == "scissors" && choice == "paper") {
        console.log("You loose!");
        message.removeAttribute("class");
        message.classList.add("message");
        message.classList.add("loss");
        message.textContent = `You chose ${choice} and the computer chose ${rps[random]}.You loose!`;
        playerButton.disabled = true;
    }
    button1.disabled = true;
    imgbutton1.style.opacity = "0.5";
    button2.disabled = true;
    imgbutton2.style.opacity = "0.5";
    button3.disabled = true;
    imgbutton3.style.opacity = "0.5";
    playerButtonCreation();
})


playAgain.addEventListener("click", (event) => {
    message.remove();
    playAgain.remove();
    playerButton.disabled = true;
    console.log("removed");
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    imgbutton1.style.opacity = "1";
    imgbutton2.style.opacity = "1";
    imgbutton3.style.opacity = "1";
})