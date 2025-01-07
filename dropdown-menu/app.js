

const optionMenu = document.querySelector('.select-menu');
 const selectbtn = optionMenu.querySelector('.select-btn');
  const options = optionMenu.querySelectorAll('.option');
  const sBtn_text = optionMenu.querySelector('.sBtn-text');

  selectbtn.addEventListener('click',() =>{
    optionMenu.classList.toggle('active');
  })

 options.forEach(option =>{
    option.addEventListener('click',() =>{
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectedOption;
        console.log(selectedOption);

        optionMenu.classList.remove('active')
    })
 })