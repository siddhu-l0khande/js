

let boxes = document.querySelectorAll('.box');
let resetBTn = document.getElementById("reset");
let newbtn = document.getElementById('New');
let msg = document.querySelector('.msg-conatiner');
let p = document.querySelector('#msg')


let turnO = true ; //palyerX ,palyerO

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const disableboxes =() =>{
    for (const box of boxes) {
        box.disabled =true;
        
    }
}
const enableboxes =() =>{
    for (const box of boxes) {
        box.enabled =true;
        box.innerText =""
    }
}


function showWinner(winner){
    p.innerText =`congratulations ,Winner is ${winner} `;
    msg.classList.remove('hide');
    disableboxes();
}

boxes.forEach((box) =>{
    box.addEventListener('click',() =>{
        console.log('box clicked');

        if(turnO){
            box.innerText="X";
            turnO =false;
        }else{
            box.innerText="O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const checkWinner = () =>{
    for (const pattern of winPattern) {

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3= boxes[pattern[2]].innerText;

        if(posval1!="" && posval2 !="" && posval3!=""){
            if(posval1 ===posval2 && posval2 ===posval3){
                console.log("winner",);
                showWinner(posval1);
            }
        }

    }
}


function reset(){
    turnO = true;
    enableboxes();
    msg.classList.add('hide');
   
}

newbtn.addEventListener('click',reset);
resetBTn.addEventListener('click',reset);