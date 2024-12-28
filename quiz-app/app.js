const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]


const que = document.getElementById('quix-question');
const option_a = document.getElementById('opt_a');
const option_b = document.getElementById('opt_b');
const option_c = document.getElementById('opt_c');
const option_d = document.getElementById('opt_d');
const ansElement = document.querySelectorAll('.answer');
const submit = document.getElementById('submit');

console.log("hiii");
let currentQuestion = 0;
let score = 0;

que.innerText = quiz[currentQuestion].question;
option_a.innerText =quiz[currentQuestion].ans1text;
option_b.innerText = quiz[currentQuestion].ans2text;
option_c.innerText = quiz[currentQuestion].ans3text;
option_d.innerText = quiz[currentQuestion].ans4text;


submit.addEventListener('click',()=>{
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if( checkedAns === null){
        alert("please select the answer");
    }else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if(currentQuestion < quiz.length){
            que.innerText = quiz[currentQuestion].question;
            option_a.innerText =quiz[currentQuestion].ans1text;
            option_b.innerText = quiz[currentQuestion].ans2text;
            option_c.innerText = quiz[currentQuestion].ans3text;
            option_d.innerText = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert(`Your score is ${score} out of ${quiz.length}`);
            location.reload();
        }
    }
});