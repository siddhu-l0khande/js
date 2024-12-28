const input = document.querySelector('#password');
const output =  document.querySelector('#output');

input.addEventListener('input',function(){
    console.log(input.value);
    let password = input.value;
    if(password.length <8){
        output.innerText ='password is too  short';
        output.style.color ='red';
    }else{
        output.innerText ='password is long enough';
        output.style.color='green';

        if(password.search(/[a-z]/) == -1){
            output.innerText = 'password missing a lower case letter';
            output.style.color ='red';
        }else if(password.search(/[A-Z]/) ==-1){
            output.innerText = 'password missing a Upper case letter';
            output.style.color ='red';
        }else if(password.search(/[0-9]/) ==-1){
            output.innerText = 'password missing a Numeric value';
            output.style.color ='red';
        }else if(password.search(/[!@#$%^&*(){}|.><]/) ==-1){
            output.innerText = 'password missing a Special characters are missing';
            output.style.color ='red';
        }else{
            output.innerText ='password is strong'
            output.style.color ='green'
        }
    }
})