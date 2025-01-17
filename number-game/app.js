

let msg1 = document.querySelector(".message1");
let msg2 = document.querySelector(".message2");
let msg3 = document.querySelector(".message3");

let answer = Math.floor(Math.random()*100)+1;

let noOfGuess = 0;
let guessedNo =[];


function play(){
    let userGuess = document.querySelector('#guess').value;
    if(userGuess <1 || userGuess>100){
        alert("guess the number betwwen 1-100");
    }else{
        guessedNo.push(userGuess);
        noOfGuess +=1;


        if(userGuess <answer){
            msg1.textContent= "your guess is too low";
            msg2.textContent = "No. of Guesses :" + noOfGuess;
            msg3.textContent = "Guessed number  are :" + guessedNo;
        }else if(userGuess > answer){
            msg1.textContent= "your guess is too high";
            msg2.textContent = "No. of Guesses :" + noOfGuess;
            msg3.textContent = "Guessed number  are :" + guessedNo;
        }
        else if(userGuess == answer){
            msg1.textContent= "Yipee!! you win !!";
            msg2.textContent = "The number was:" + answer;
            msg3.textContent = "You guessed it in :" + noOfGuess +"  guesses";

            document.querySelector('#mybtn').disabled = true;
        }
    }

}