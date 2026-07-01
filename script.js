const loadingText = document.getElementById("loading-text");
const loadingScreen = document.getElementById("loading-screen");

const mainPage = document.getElementById("main-page");
const messagePage = document.getElementById("message-page");
const finalPage = document.getElementById("final-page");

const openBtn = document.getElementById("openBtn");
const wishBtn = document.getElementById("wishBtn");

const music = document.getElementById("music");
const typewriter = document.getElementById("typewriter");

const loadingMessages = [
  "Initializing Birthday Surprise...",
  "Loading Love...",
  "Preparing Your Gift...",
  "Done ❤️"
];

let loadingIndex = 0;

function loadingAnimation() {
  if (loadingIndex < loadingMessages.length) {
    loadingText.textContent = loadingMessages[loadingIndex];
    loadingIndex++;
    setTimeout(loadingAnimation, 1200);
  } else {
    loadingScreen.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }
}

loadingAnimation();

const message = `
Happy Birthday Dody ❤️

Today is your special day,
and I just wanted to remind you
how much you mean to me.

I hope this year brings you
everything you've been wishing for.

Thank you for always making me smile,
for your kindness,
your support,
and your love.

I wish you endless happiness,
good health,
success,
and beautiful memories.

Happy Birthday,
My Love ❤️

Love,
Zeinab
`;

openBtn.addEventListener("click", () => {

  mainPage.classList.add("hidden");
  messagePage.classList.remove("hidden");

  music.play().catch(() => {});

  typeWriter();

});

function typeWriter(){

let i=0;

const timer=setInterval(()=>{

typewriter.innerHTML += message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},40);

}

wishBtn.addEventListener("click",()=>{

createConfetti();

setTimeout(()=>{

messagePage.classList.add("hidden");

finalPage.classList.remove("hidden");

},2500);

});

function createConfetti(){

for(let i=0;i<120;i++){

const heart=document.createElement("div");

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

}
