

const btn = document.querySelector('#btn');
const joke = document.querySelector('#joke');

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why was the math book sad? It had too many problems.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't eggs tell jokes? They'd crack each other up!", 
    "What do you call a bear with no teeth? A gummy bear!", 
    "How do you organize a space party? You planet!", 
    "Why don't skeletons fight each other? They don't have the guts.", 
    "Why did the tomato turn red? Because it saw the salad dressing!",
     "What kind of shoes do ninjas wear? Sneakers!",
     "Why was the math book sad? Because it had too many problems.",
      "How do you make holy water? You boil the hell out of it!", 
     "What did one ocean say to the other ocean? Nothing, they just waved.", 
     "Why don't some fish play piano? Because you can't tuna fish!"
  ];
  
  

const getJoke = () =>{
  index = Math.floor( Math.random()*jokes.length);
      joke.innerHTML = jokes[index];
   }

btn.addEventListener('click', getJoke);