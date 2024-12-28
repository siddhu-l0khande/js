 

 const rates = document.querySelectorAll('.rating');
 const btn = document.querySelector('#btn');
 const container = document.querySelector('#container');

 let selectedRate = '';


 rates.forEach((rate) =>{
    rate.addEventListener("click",(event) =>{
        remove();
        selectedRate =
         event.target.innerText || event.target.parentNode.innerText ;
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    
    });
 });

 btn.addEventListener("click",() =>{
    if(selectedRate === ""){
        alert('please select the feed back');
    }else{
        container.innerHTML =
        `
         <b>Thank you! </b>
         <br>
         <br>
         <b>Feedback : ${selectedRate} </b>
         <br>
         <br>
         <p>we will use your Feedback to improve our customer support</p>
        `;
    };


 });

 const remove = () =>{
    rates.forEach((rate) =>{
        rate.classList.remove('active');
    });
 };