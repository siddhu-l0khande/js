

const moves =document.querySelector('#moves');
const time = document.querySelector('#time');
const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
const gameConatiner = document.querySelector('.game-conatiner');
const result = document.querySelector('#result');
const controls = document.querySelector('.controls-conatiner');

let cards;
let interval;
let firstCard = false;
let secondCard = false;


// items array

const items =[
    {
        name:"Bee",
        image:"bee.png"
    },
    {
        name:"chameleon",
        image:"chameleon.png"
    },
    {
        name:"chrocodile",
        image:"crocodile.png"
    },
    {
        name:"monkey",
        image:"monkey.png"
    },
    {
        name:"mushroom",
        image:"mushroom.png"
    },
    {
        name:"sloth",
        image:"sloth.png"
    },
    {
        name:"snake",
        image:"snake.png"
    },
    {
        name:"tiger",
        image:"tiger.png"
    },
    {
        name:"toucan",
        image:"toucan.png"
    }
];


let sec=0;
let min = 0;


let movesCount =0;
let winCount = 0;

const timeGenerator =()=>{
    sec+=1;


    if(sec>=60){
        min+=1;
        sec =0;

    }
    let seecondsValue = sec <10 ?`0${sec}`:sec;
let minutesValue = min <10 ? `0${min}`:min;

time.innerHTML=`<span>Time:</span>${minutesValue}:${seecondsValue}`;
};


const movesCounter =()=>{
    movesCount +=1;
    moves.innerHTML =`<span>Moves:</span>${movesCount}`;
};

const generateRandom =(size =4) =>{
    //temp array 
    let temArr = [...items];
    //initaialzing caedValues array
    let cardValues =[];
    // size should be double (4*4 matrix)/2 

    size = (size*size)/2;

    for(let i= 0; i< size ;i++){
        const randomIndex = Math.floor(Math.random()*temArr.length);
        cardValues.push(temArr[randomIndex]);

        temArr.splice(randomIndex,1);

    }

    return cardValues;
}



const matrixGenerator =(cardValues,size = 4)=>{
    gameConatiner.innerHTML ="";
    cardValues = [...cardValues,...cardValues];
    cardValues.sort(()=> Math.random () - 0.5);

    for(let i = 0; i<size*size;i++){
        gameConatiner.innerHTML +=
        `
        <div class="card-conatiner" data-card-value ="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/>
        </div>
        `;
    }

    gameConatiner.style.gridTemplateColumns= `repeat(${size},auto)`

    cards = document.querySelectorAll('.card-conatiner');
    cards.forEach((card)=>{
        card.addEventListener('click',() =>{
            if(!card.classList.contains("matched")){
                card.classList.add('flipped');
                if(!firstCard){
                    firstCard = card;

                    let firstCardValue = card.getAttribute("data-card-value");

                }
            }else{
                movesCounter();

                secondCard = card;

               let secondCardValue = card.getAttribute("data-card-value");
                if(firstCardValue == secondCardValue){
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");

                    firstCard =false;
                    winCount+=1;

                    if(winCount == Math.floor(cardValues.length/2)){
                        result.innerHTML =`<h2>You Won</h2> <h4>Moves: ${movesCount}</h4>`;
                        stopGame();
                    }

                }else{
                    
                        let [tempfirst ,tempsecond] =[firstCard ,secondCard];
                        firstCard=false;
                        secondCard=false;
                        let delay = setTimeout(()=>{
                            tempfirst.classList.remove("flipped");
                            tempsecond.classList.remove("flipped");
                        },900);
                }
            }
        });
    });

};

startbtn.addEventListener('click',() =>{
    movesCount =0;
    min =0;
    sec =0;
    controls.classList.add('hide');
    stopbtn.classList.remove('hide');
    startbtn.classList.add('hide');

    interval = setInterval(timeGenerator,1000);

    moves.innerHTML=`<span>Moves:</span> ${movesCount}`;

    initaialzer();
});

stopbtn.addEventListener('click',(stopGame =()=>{
    controls.classList.remove('hide');
    stopbtn.classList.add('hide');
    startbtn.classList.remove('hide');
    clearInterval(interval);
}))

const initaialzer =()=>{
    result.innerHTML='';
    winCount=0;
    let cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}


// initaialzer();



