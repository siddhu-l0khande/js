const  btn =document.querySelector('button');
const input= document.querySelector('.qr-input');
const img = document.querySelector('.QR-img');

console.log(btn,input,img);

btn.addEventListener('click',() =>{
    
    if(!input.value){
        alert("plzz enter the value");
        return;
    }else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        img.alt=`qr-code for${input.value}`;
        
    }

});