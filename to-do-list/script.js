

let Add = document.querySelector('#push');
let input = document.querySelector('input');
let tasks = document.querySelector('#tasks');


Add.addEventListener('click',() =>{
    console.log(input.value);
    if( input.value == ""){
        alert('Please enter the task')
    }
    else{
        tasks.innerHTML += `
        <div class="task" >
           <span id="taskname" >
               ${input.value}
           </span>
           <button class="delete" >
                <i class="fa-solid fa-trash-can"></i>
           </button>
        </div>
        `


         let currentTasks = document.querySelectorAll(".delete");

         for(let i = 0;  i < currentTasks.length ; i++){
            currentTasks[i].onclick =function(){
                this.parentNode.remove();
            }
         }  

         let taskcom = document.querySelectorAll('.task');

         for( let i = 0; i < taskcom.length; i++){
            taskcom[i].onclick = function(){
                this.classList.toggle('completed')

            }
         }

         input.value ='';
    }
})


