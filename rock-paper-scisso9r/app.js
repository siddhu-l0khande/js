

let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
const userCOunt = document.querySelector('#user-score');
const compCount = document.querySelector('#comp-score')

const genComputerChoice =()=>{
    const option = ['rock', 'paper', 'scissor'];
     const index = Math.floor(Math.random()*3);
     return option[index]
}


const draw =() =>{
    console.log('game draw');
    msg.innerText =" GAME DRAWN";
    msg.style.backgroundColor ="orange"
};

const showWinner=(Userwin) =>{
    if(Userwin == true){
        userScore++;
        userCOunt.innerText = userScore;
        console.log('you win');
        msg.innerText = "YOU WIN";
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compCount.innerText = compScore;
        console.log('you loose');
        msg.innerText = "YOU LOOSE";
        msg.style.backgroundColor ="red";
    }
}


const playGame = (UserChoise) =>{
    console.log('user choice:',UserChoise);
    const compChoice = genComputerChoice();
    console.log('Comp choice :', compChoice);

    if (UserChoise == compChoice){
        draw();
    }else{
        let Userwin =true;
        if( UserChoise === "rock"){
            Userwin = compChoice === "paper" ? false : true;
        }else if(UserChoise == "paper"){
            Userwin = compChoice == "scissor" ? false : true ;
        }else{
            Userwin = compChoice == "rock" ??false ;true ;
        }
        showWinner(Userwin);
    }

};



choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener('click',() =>{
        const UserChoise = choice.getAttribute("id");
        playGame(UserChoise);
    })
})