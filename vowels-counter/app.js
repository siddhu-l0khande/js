

let textarea =document.querySelector('#textarea');
let button = document.querySelector('#count'); 
let output = document.querySelector('.output');


button.addEventListener('click',() =>{

    if( textarea.value ===''){
        output.innerHTML='Please Enter some text';
    }else{

        const val = textarea.value;
        let count = 0;

        for( i =0; i<val.length ; i++){
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i]=== "u"){
                count++;
            }
        }

        output.innerHTML = `The number of vowels are ${count}`;
    }
})