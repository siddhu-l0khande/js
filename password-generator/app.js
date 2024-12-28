

const passinput = document.querySelector('#password-input');
const passlength = document.querySelector('#length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generate = document.querySelector('#generate');
const copy = document.querySelector('#copy');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lower = 'abcdefghijklmnopqrstuvwxyz';
 const num = '0123456789';
 const sym = '!@#$%^&*()_+';

 let password ='';

 generate.addEventListener('click',() =>{
    let str='';
    if(uppercase.checked){
        str +=upper;
    }
    if(lowercase.checked){
        str +=lower;
    }
    if(number.checked){
        str +=num;
    }
    if(symbol.checked){
        str +=sym;
    }

    for( i=0;i< passlength.value;i++ ){
        let index = Math.floor(Math.random()*str.length);
        password +=str[index];
    }

    passinput.value=password;
    
 });

