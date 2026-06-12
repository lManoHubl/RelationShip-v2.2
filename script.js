const terminal = document.getElementById("terminal");

const lines = [
    "Initializing relationship...",
    "",
    "Loading memories...",
    "",
    "Loading happiness...",
    "",
    "Relationship v2.2",
    "",
    "Developers:",
    "Ema & Nata",
    "",
    "Release Date:",
    "12/04/2024",
    "",
    "Current Version:",
    "2 years 2 months",
    "",
    "Status:",
    "Stable ❤️"
];

async function typeText(){

    for(const line of lines){

        for(const char of line){

            terminal.innerHTML += char;

            await new Promise(resolve =>
                setTimeout(resolve,30)
            );
        }

        terminal.innerHTML += "\n";

        await new Promise(resolve =>
            setTimeout(resolve,400)
        );
    }

    document
        .getElementById("startBtn")
        .style.display = "block";
}

typeText();

document
.getElementById("startBtn")
.addEventListener("click", () => {

    document
        .getElementById("music")
        .play();

    const loader =
        document.getElementById("loader");

    loader.classList.add("fadeOut");

    setTimeout(() => {

        loader.style.display = "none";

        document
            .getElementById("content")
            .classList.remove("hidden");

        document
            .getElementById("content")
            .classList.add("fadeIn");

    }, 1000);

});

document
.getElementById("futureBtn")
.addEventListener("click", launchFuture);

function choose(option) {

    showResult(option);
}

function showResult(option) {

    const result =
        document.getElementById("result");

    document
        .getElementById("question")
        .classList.add("hidden");

    if (option === "si") {

        result.innerHTML = `
            <h2>Muchísimos años más ❤️</h2>
            <img src="assets/perro_feliz.jpg">
        `;
    }

    else if (option === "superSi") {

        result.innerHTML = `
            <h2>Toda una vida más ❤️</h2>
            <img src="assets/perro_feliz.jpg">
        `;
    }

    else {

        result.innerHTML = `
            <h2>
            Entiendo tu decisión.
            </h2>

            <p>
            Gracias por todos los recuerdos ❤️
            </p>
        `;
    }
}

// Easter Egg P
document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "p") {

        alert("You And Me ❤️");
    }
});

// Easter Egg L
document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "l") {

        alert("My Love: Infinity ❤️");
    }
});

// Easter Egg E
document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "e") {

        alert("Favorite Person: Nata ❤️");
    }
});
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i=0;i<80;i++){

    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5)*0.3,
        dy:(Math.random()-0.5)*0.3
    });
}

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0)p.x=canvas.width;
        if(p.x>canvas.width)p.x=0;

        if(p.y<0)p.y=canvas.height;
        if(p.y>canvas.height)p.y=0;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="#00ff88";
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show-card"
            );
        }

    });

});

document
.querySelectorAll(".hidden-card")
.forEach(card => {

    observer.observe(card);

});

function updateCounter(){

    const start =
    new Date("2024-04-12");

    const now =
    new Date();

    const diff =
    now - start;

    const days =
    Math.floor(diff / 86400000);

    const hours =
    Math.floor(diff / 3600000) % 24;

    const minutes =
    Math.floor(diff / 60000) % 60;

    const seconds =
    Math.floor(diff / 1000) % 60;

    document
    .getElementById("liveCounter")
    .innerHTML =
    `❤️ ${days} días ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCounter,1000);

updateCounter();

document.addEventListener(
"keydown",
function(e){

    if(e.key === "F12"){

        e.preventDefault();

        alert(`

=== DEVELOPER MODE ===

Access Granted

Top Secret Information

Nata = Best Person Ever ❤️

Love = Infinity

Relationship Status:
Stable

`);
    }

});

async function launchFuture(){

    const result =
    document.getElementById("result");

    result.innerHTML = "";

    const messages = [

        "Running future_juntos()...",
        "Checking compatibility...",
        "Compatibility: 100%",
        "Loading future..."

    ];

    for(const msg of messages){

        result.innerHTML += `<p>${msg}</p>`;

        await new Promise(resolve =>
            setTimeout(resolve,1000)
        );
    }

    document
    .getElementById("question")
    .classList.remove("hidden");
}

const konami = [
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

let userInput = [];

document.addEventListener(
"keydown",
function(e){

    userInput.push(e.key);

    userInput =
    userInput.slice(-10);

    if(
    JSON.stringify(userInput)
    ===
    JSON.stringify(konami)
    ){

        showSecretLetter();
    }

});

function showSecretLetter(){

    const div =
    document.createElement("div");

    div.className="memory";

    div.innerHTML=`

    <h2>Carta para Nata ❤️</h2>

    <p>

    Si encontraste este mensaje,
    significa que descubriste
    uno de los secretos del programa.

    Gracias por estos 2 años y 2 meses.

    Gracias por las risas,
    por los abrazos,
    por la paciencia
    y por todos los momentos
    que hemos compartido.

    Espero que sigamos creando
    recuerdos juntos durante mucho tiempo.

    No he sido alguien perfecto y cometí muchos errores,
    pero te doy las gracias por seguir a mi lado.

    Espero que podamos mejorar las cosas
    y seguir compartiendo más momentos juntos.

    Tú eres de lo mejor que me ha pasado.
    Y puede que no sepa qué vaya a pasar de aquí en adelante,
    pero espero que podamos seguir juntos.

    Te amo.

    - Ema ❤️

    </p>
    `;

    document.body.appendChild(div);

    div.scrollIntoView({
        behavior:"smooth"
    });

}
