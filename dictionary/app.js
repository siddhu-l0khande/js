

const input = document.querySelector('#input');
const info = document.querySelector('#info');

const container = document.querySelector('#mean-container');

const title = document.querySelector('.title');
const Meaning = document.querySelector('.Meaning');
const audio =document.querySelector('#audio')
 async function fecthAPI(word){

    try {
        info.style.display= "block";
        container.style.display = "none"

        info.innerText =`Searching the meaing of ${word}...`
        let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

        const result = await fetch(url).then((res)=> res.json());
        if(result.title){
            info.style.display= "none";
            container.style.display = "block";
            title.innerText = word;
            Meaning.innerText = "N/A";
            audio.style.display= "none";
        }else{
            info.style.display= "none";
            container.style.display = "block";
            audio.style.display= "inline-flex";
            title.innerText = result[0].word;
            Meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
        }
        
        
    } catch (error) {
        console.log(error);
    }
  
   
}


input.addEventListener('keyup', (e) =>{
   if( e.target.value && e.key === "Enter"){
    fecthAPI(e.target.value)
   }
});