// ============================
// ELEMENTS
// ============================

const wrapper = document.querySelector(".envelope-wrapper");
const seal = document.querySelector(".seal");
const website = document.getElementById("website");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// ============================
// OPEN ENVELOPE
// ============================

seal.addEventListener("click", () => {

    // Open envelope
    wrapper.classList.add("open");

    // Play music
    if(!playing){
        music.play();
        playing=true;
        musicBtn.textContent="🔊";
    }

    // Show website and auto-scroll after card is visible
    setTimeout(() => {
        website.style.display = "block";
        
        // Wait a moment so user sees the card, then scroll
        setTimeout(() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }, 1500); // 👈 Shows card for 1.5 seconds then scrolls

    }, 800);

});
// ============================
// MUSIC BUTTON
// ============================

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        playing=false;

        musicBtn.textContent="🔇";

    }

    else{

        music.play();

        playing=true;

        musicBtn.textContent="🔊";

    }

});
// ============================
// COUNTDOWN
// ============================

const timer = document.getElementById("timer");

const weddingDate = new Date("August 6, 2026 19:00:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days = Math.floor(gap/(1000*60*60*24));

    const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));

    const mins = Math.floor((gap%(1000*60*60))/(1000*60));

    const secs = Math.floor((gap%(1000*60))/1000);

    if(timer){

        timer.innerHTML =

        `${days}d : ${hours}h : ${mins}m : ${secs}s`;

    }

},1000);

// ============================
// GSAP ENTRANCE
// ============================

gsap.registerPlugin(ScrollTrigger);

gsap.from(".banner-content",{

    opacity:0,

    y:80,

    duration:1.5

});

gsap.utils.toArray(".couple-card,.event").forEach(item=>{

    gsap.from(item,{

        scrollTrigger:item,

        opacity:0,

        y:60,

        duration:1

    });

});

// ============================
// FALLING PETALS
// ============================

const petals = document.getElementById("petal-container");

function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML = "✿";
petal.style.color = "#ffffff";


    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-30px";

    petal.style.fontSize=(12+Math.random()*16)+"px";

    petal.style.opacity=.8;

    petal.style.pointerEvents="none";

    petal.style.zIndex="999";

    petals.appendChild(petal);

    gsap.to(petal,{

        y:window.innerHeight+60,

        x:(Math.random()*200)-100,

        rotation:360,

        duration:6+Math.random()*4,

        ease:"none",

        onComplete:()=>petal.remove()

    });

}

setInterval(createPetal,700);
