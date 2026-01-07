function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false
    });
}

const relogio = document.getElementById('relogio');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');

let seconds = 0;
let timer;

function startTimer() {
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds)
    }, 1000);
}

iniciar.addEventListener('click', function (e) {
    clearInterval(timer);
    startTimer();
});

pausar.addEventListener('click', function (e) {
    clearInterval(timer);
});

zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    seconds = 0
});