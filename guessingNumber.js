console.log("Welcome to the world of games");

while (true) {
    let number = prompt("Guess the number: ");
    number = Number(number);
    const randomNumber = Math.ceil(Math.random() * 10);
    if(number === randomNumber) {
        alert("YOU WIN! YOU ARE A LUCKY MASCOTT FOR US! THANK YOU FOR BEING THE PART OF THIS GAME");
        break;
    } else {
        console.log("You guessed the number: " , number , " but the number was: " , randomNumber);
    }
}
