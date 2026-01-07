const clock = document.getElementById('clock');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('start')) {
        clearInterval(timer);
        startTimer();
        clock.style.color = 'black'
    }

    if (element.classList.contains('pause')) {
        clearInterval(timer);
        clock.style.color = 'red'
    }

    if (element.classList.contains('restart')) {
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
        clock.style.color = 'black'
    }

});


























// const relogio = document.getElementById('relogio');
// const iniciar = document.getElementById('iniciar');
// const pausar = document.getElementById('pausar');
// const zerar = document.getElementById('zerar');

// let seconds = 0;
// let timer;

// function getTimeFromSeconds(seconds) {
//     const data = new Date(seconds * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//         timeZone: 'UTC',
//         hour12: false
//     });
// }

// function startTimer() {
//     timer = setInterval(function(){
//         seconds++;
//         relogio.innerHTML = getTimeFromSeconds(seconds)
//     }, 1000);
// }

// iniciar.addEventListener('click', function (e) {
//     clearInterval(timer);
//     startTimer();
// });

// pausar.addEventListener('click', function (e) {
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function (e) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     seconds = 0
// });
