
const selector={
    boardContainer : document.querySelector('.board-contianer'),
    board :document.querySelector('.board'),
    moves:document.querySelector('.moves'),
    timer : document.querySelector('.timer'),
    start :document.querySelector('button'),
    win :document.querySelector('.win')
}

const state ={
    gameStarted : false,
    flippedCard : 0,
    totalflips : 0,
    totaltime : 0,
    loop:null
}

const suffle = array =>{
    const cloneArray = [...array];

    for( let i = cloneArray.length ; i>0 ;i--){
        const randomIndex =Math.floor(Math.random()*(i+1));
        const orginal = cloneArray[i];

        cloneArray[i] =cloneArray[randomIndex];
        cloneArray[randomIndex] =orginal;
    }
    return cloneArray
}


const pickRandom =(array,items)=>{
    const cloneArray = [...array];
    const  randomPicks =[];

    for(let i =0; i<items ;i++){
        const randomIndex =Math.floor(Math.random()*cloneArray.length);

        randomPicks.push(cloneArray[randomIndex]);

        cloneArray.splice(randomIndex,1);

    }
    return randomPicks;
}

const generateGame = ()=>{
    const dimensions = selector.board.getAttribute('data-dimension')
    if(dimensions%2 !== 0){
        throw new Error('the dimension of the board must be an even  number');
    }

    const emojis =["🍇","🍉","🍊","🍋‍🟩","🍍","🥭","🍓","🍒","🍎","🥝"];
    const Picks = pickRandom(emojis ,dimensions*dimensions/2);
    const items = suffle([...Picks,...Picks]);
    const cards =`
    <div class="board" style=" grid-template-columns: repeat(${dimensions},auto);" >
    ${items.map(item =>`
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back">${item}</div>
        </div>

        `).join('')

    }
    </div>
    `

    const parser = new DOMParser().parseFromString(cards,'text/html');
    selector.board.replaceWith(parser.querySelector('.baord'));


}

const startGame = () =>{
    state.gameStarted =true ;
    selector.start.classList.add('disabled');


    state.loop = setInterval(() =>{
        state.totaltime++;

        selector.moves.innerText =`${state.totalflips} moves`;
        selector.timer.innerText =` Time : ${state.totaltime} sec`
    });

    state.flippedCard =0;
}

const flippedCard = card =>{
    state.flippedCard ++;
    state.totalflips++;

    if(state.gameStarted){
        startGame();
    }else if(state.flippedCard <=2){
        card.classList.add('flipped')
    }else if(state.flippedCard === 2){
        const flippedCards = document.querySelector('.flipped:not(.matched)');

        if(flippedCards[0].innerText === flippedCards[1].innerText){
            flippedCards[0].classList.add('.matched');
            flippedCards[1].classList.add('.matched');

        }

        setTimeout(()=>{
            flippedCards()
        },1000);
    }
    if(document.querySelectorAll('.card:not(flipped)').length){
        setTimeout(()=>{
            selector.boardContainer.classList.add('flipped');
            selector.win.innerHTML=`
            <span class="win-text">
                YOU Won!! <br>
                with <span class="highlight">${state.totalflips}</span>moves<br>
                under <span class="highlight">${state.totaltime}</span>seconds
            </span>
            `

            clearInterval(state.loop);
        },1000)
    }

}


const attachEventListeners =() =>{
    document.addEventListener('click', event =>{
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;


        if(eventTarget.className.includes('card') && !eventParent.className.includes('flipped')){
            flippedCard(eventParent);
        }else if(eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')){
            startGame();
        }
    })
};


startGame();
attachEventListeners();


