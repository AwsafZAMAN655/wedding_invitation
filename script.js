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
// AUTO-PLAY MUSIC
// ============================

music.addEventListener('play', function() {
    playing = true;
    musicBtn.textContent = "🔊";
});

music.addEventListener('pause', function() {
    playing = false;
    musicBtn.textContent = "🔇";
});

// ============================
// OPEN ENVELOPE
// ============================

seal.addEventListener("click", function() {

    wrapper.classList.add("open");

    if(!playing){
        music.play();
        playing = true;
        musicBtn.textContent = "🔊";
    }

    setTimeout(function() {
        website.style.display = "block";

        setTimeout(function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }, 1500);

    }, 800);

});

// ============================
// MUSIC BUTTON
// ============================

musicBtn.addEventListener("click", function() {

    if(playing){
        music.pause();
        playing = false;
        musicBtn.textContent = "🔇";
    }
    else{
        music.play();
        playing = true;
        musicBtn.textContent = "🔊";
    }

});

// ============================
// COUNTDOWN
// ============================

var timer = document.getElementById("timer");
var weddingDate = new Date("August 6, 2026 19:00:00").getTime();

setInterval(function() {

    var now = new Date().getTime();
    var gap = weddingDate - now;

    var days = Math.floor(gap / (1000 * 60 * 60 * 24));
    var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((gap % (1000 * 60)) / 1000);

    if(timer){
        timer.innerHTML = days + "d : " + hours + "h : " + mins + "m : " + secs + "s";
    }

}, 1000);

// ============================
// GSAP ENTRANCE
// ============================

gsap.registerPlugin(ScrollTrigger);

gsap.from(".banner-content", {
    opacity: 0,
    y: 80,
    duration: 1.5
});

gsap.utils.toArray(".couple-card,.event").forEach(function(item) {
    gsap.from(item, {
        scrollTrigger: item,
        opacity: 0,
        y: 60,
        duration: 1
    });
});

// ============================
// FALLING PETALS
// ============================

var petals = document.getElementById("petal-container");

function createPetal() {

    var petal = document.createElement("div");
    petal.innerHTML = "✿";
    petal.style.color = "#ffffff";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (12 + Math.random() * 16) + "px";
    petal.style.opacity = 0.8;
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "999";
    petals.appendChild(petal);

    gsap.to(petal, {
        y: window.innerHeight + 60,
        x: (Math.random() * 200) - 100,
        rotation: 360,
        duration: 6 + Math.random() * 4,
        ease: "none",
        onComplete: function() {
            petal.remove();
        }
    });

}

setInterval(createPetal, 700);