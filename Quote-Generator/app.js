

const btn =document.querySelector('#btn');


const apiURl ='https://api.quotable.io/random';

 async function getQuote(){

    const response = await fetch(apiURl);
    const data =  await response.json();
}

btn.addEventListener('click',getQuote);


