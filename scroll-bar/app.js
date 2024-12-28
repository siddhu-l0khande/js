

const scroll = document.querySelector('.scrollbar');


window.addEventListener('scroll',() =>{
    let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight))*100 ;

    scroll.style.width = percentage + "%";
})
